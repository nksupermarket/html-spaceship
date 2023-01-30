import { Center, MouseInterface, XY } from '../../types/interfaces';
import { Direction } from '../../types/types';
import {
  checkCollisionBtwnCircleAndRect,
  checkIfWithinBounds,
  checkShipCollision,
  getCollisionAxisForBounds,
  getCollisionPointBetweenRectAndCircle,
  getShipCollision,
} from '../utils/checkCollision';
import Boundary, { CircleBoundary, RectBoundary } from './boundaries';
import Bullet from './Bullet';
import Entity from './Entity';
import spaceshipPic from '../assets/rocket-lightmode.png';
import { createImage, getExtremities } from '../utils/misc';
import { SS_DIMENSIONS } from '../utils/constants';
import Line from './Line';
import Vector from './Vector';
import { getSlopeOfTangent } from '../utils/math';

function easeInCirc(x: number): number {
  return 1 - Math.sqrt(1 - Math.pow(x, 3));
}

const drawRoundRect = function (
  c: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: {
    upperLeft?: number;
    upperRight?: number;
    lowerLeft?: number;
    lowerRight?: number;
  },
  fill: boolean,
  stroke: boolean
) {
  const cornerRadius = {
    upperLeft: 0,
    upperRight: 0,
    lowerLeft: 0,
    lowerRight: 0,
  };
  if (typeof stroke == 'undefined') {
    stroke = true;
  }
  if (typeof radius === 'object') {
    let side: keyof typeof radius;
    for (side in radius) {
      const radVal = radius[side];
      if (radVal === undefined) return;
      cornerRadius[side] = radVal;
    }
  }

  c.beginPath();
  c.moveTo(x + cornerRadius.upperLeft, y);
  c.lineTo(x + width - cornerRadius.upperRight, y);
  c.quadraticCurveTo(x + width, y, x + width, y + cornerRadius.upperRight);
  c.lineTo(x + width, y + height - cornerRadius.lowerRight);
  c.quadraticCurveTo(
    x + width,
    y + height,
    x + width - cornerRadius.lowerRight,
    y + height
  );
  c.lineTo(x + cornerRadius.lowerLeft, y + height);
  c.quadraticCurveTo(x, y + height, x, y + height - cornerRadius.lowerLeft);
  c.lineTo(x, y + cornerRadius.upperLeft);
  c.quadraticCurveTo(x, y, x + cornerRadius.upperLeft, y);
  c.closePath();
  if (fill) {
    c.fill();
  }
};

export const spaceshipImg = createImage(spaceshipPic);

export default class Spaceship extends Entity {
  angle: number;
  shotAvailable: boolean;
  bullets: Bullet[];
  decelerationTime: number;
  acceleration: number;
  accelerating: boolean;
  speed: number;
  velocity: XY;
  collisionLine: Line | null;

  constructor({ x, y }: XY) {
    super(x, y, SS_DIMENSIONS.height, SS_DIMENSIONS.width);
    this.speed = 10;
    this.angle = (90 * Math.PI) / 2;
    this.shotAvailable = true;
    this.decelerationTime = 0;
    this.acceleration = 0.05;
    this.accelerating = false;
    this.bullets = [];
    this.velocity = { x: 0, y: 0 };
    this.collisionLine = null;
  }

  move(dir: Direction) {
    this.resetDeceleration();
    switch (dir) {
      case 'left': {
        this.velocity.x -= this.acceleration * this.speed;
        if (this.velocity.x < -this.speed) this.velocity.x = -this.speed;
        break;
      }
      case 'right': {
        this.velocity.x += this.acceleration * this.speed;
        if (this.velocity.x > this.speed) this.velocity.x = this.speed;
        break;
      }
      case 'up': {
        this.velocity.y -= this.acceleration * this.speed;
        if (this.velocity.y < -this.speed) this.velocity.y = -this.speed;
        break;
      }
      case 'down': {
        this.velocity.y += this.acceleration * this.speed;
        if (this.velocity.y > this.speed) this.velocity.y = this.speed;
        break;
      }
    }
  }

  handleBoundsCollision(bounds: XY) {
    const extremities = getExtremities(this.getVertices());

    for (const [key, value] of Object.entries(extremities)) {
      switch (key) {
        case 'top': {
          if (value < 0) {
            this.updateYPosition(0 - value);
            this.velocity.y = -this.velocity.y;
          }
          break;
        }
        case 'left': {
          if (value < 0) {
            this.updateXPosition(0 - value);
            this.velocity.x = -this.velocity.x;
          }
          break;
        }
        case 'bottom': {
          if (value > bounds.y) {
            this.updateYPosition(bounds.y - value);
            this.velocity.y = -this.velocity.y;
          }
          break;
        }
        case 'right': {
          if (value > bounds.x) {
            this.updateXPosition(bounds.x - value);
            this.velocity.x = -this.velocity.x;
          }
          break;
        }
      }
    }
  }

  getFarthestPoint(vector: XY) {
    const vertices = this.getVertices();
    let farthestPoint = vertices[0];
    let dotProduct = farthestPoint.x * vector.x + farthestPoint.y * vector.y;

    for (let i = 1; i < vertices.length; i++) {
      const testDotProduct =
        vertices[i].x * vector.x + vertices[i].y * vector.y;
      if (testDotProduct > dotProduct) {
        dotProduct = testDotProduct;
        farthestPoint = vertices[i];
      }
    }
    return farthestPoint;
  }

  handleCollisionWithLine(line: Line) {
    const vectorOfLine = Vector.fromPoints(line.point1, line.point2);

    const normal = Vector.fromVector(vectorOfLine);
    if (this.velocity.y > 0) normal.toRightNormal();
    else if (this.velocity.y < 0) normal.toLeftNormal();

    const farthestPoint = this.getFarthestPoint(normal);
    // this vector is used to see which side the farthestPoint lies relative to vectorOfLine
    const testVector = Vector.fromPoints(farthestPoint, line.point1);
    if (testVector.getCrossProduct(vectorOfLine) > 0) {
      //testVector is to the right of line

      // This equation to find the factor will help us find the amount of penetration.
      const factor =
        (-vectorOfLine.x * testVector.x - vectorOfLine.y * testVector.y) /
        (vectorOfLine.x * vectorOfLine.x + vectorOfLine.y * vectorOfLine.y);
      const amountOfPenetration = {
        x: testVector.x + factor * vectorOfLine.x,
        y: testVector.y + factor * vectorOfLine.y,
      };

      this.updateXPosition(-amountOfPenetration.x);
      this.updateYPosition(-amountOfPenetration.y);

      this.velocity.y = -this.velocity.y;
    }
  }

  handleCollisionWithCircle(boundary: CircleBoundary) {
    const collisionPoint = getCollisionPointBetweenRectAndCircle(
      boundary.getCenter(),
      boundary.radius,
      this.getVertices()
    );
    if (!collisionPoint) return;
    const slope: XY = getSlopeOfTangent(collisionPoint, boundary.getCenter());
    this.collisionLine = new Line(
      { x: collisionPoint.x + slope.x, y: collisionPoint.y + slope.y },
      { x: collisionPoint.x - slope.x, y: collisionPoint.y - slope.y }
    );
    this.handleCollisionWithLine(
      new Line(
        { x: collisionPoint.x + slope.x, y: collisionPoint.y + slope.y },
        { x: collisionPoint.x - slope.x, y: collisionPoint.y - slope.y }
      )
    );
  }

  handleBoundaryCollision(boundaries: (CircleBoundary | RectBoundary)[]) {
    const vertices = this.getVertices();
    boundaries.forEach((boundary) => {
      let collision = null;
      if (boundary.kind === 'circle') {
        this.handleCollisionWithCircle(boundary);
      } else {
        for (let i = 0; i < vertices.length; i++) {
          collision = getShipCollision(vertices[i], boundary);
          if (collision) break;
        }
        if (!collision) return;
        switch (collision.axis) {
          case 'x':
            this.updateXPosition(
              this.velocity.x > 0 ? -collision.amount : collision.amount
            );
            this.velocity.x = -this.velocity.x;
            return;
          case 'y':
            this.updateYPosition(
              this.velocity.y > 0 ? -collision.amount : collision.amount
            );
            this.velocity.y = -this.velocity.y;
            return;

          default:
            return;
        }
      }
    });
  }

  bounce(bounds: XY, boundaries: (CircleBoundary | RectBoundary)[]) {
    this.handleBoundsCollision(bounds);
    this.handleBoundaryCollision(boundaries);
    // // handle element boundaries
    // boundaries.forEach((boundary) => {
    //   let collision = null;

    //   if (boundary.circle) {
    //     collision = checkCollisionBtwnCircleAndRect(
    //       boundary,
    //       this.getVertices(),
    //       this.getEdges()
    //     );
    //   } else {
    //     for (let i = 0; i < edges.length; i++) {
    //       collision = getShipCollisionAxis(edges[i], boundary);
    //       if (collision) break;
    //     }
    //   }
    //   switch (collision) {
    //     case 'x':
    //       this.velocity.y = -this.velocity.y;
    //       return;
    //     case 'y':
    //       this.velocity.x = -this.velocity.x;
    //       return;
    //     case true: {
    //       this.velocity.x = -this.velocity.x;
    //       this.velocity.y = -this.velocity.y;
    //       return;
    //     }
    //     default:
    //       return;
    //   }
    // });
  }

  updateXPosition(shift = this.velocity.x) {
    this.x += shift;
  }

  updateYPosition(shift = this.velocity.y) {
    this.y += shift;
  }

  shoot() {
    if (!this.shotAvailable) return;
    const { xCenter, yCenter } = this.getCenter();

    const r = this.height / 2;
    const x = r * Math.cos(this.angle + Math.PI / 2) + xCenter;
    const y = r * Math.sin(this.angle + Math.PI / 2) + yCenter;
    this.bullets.push(new Bullet({ x, y }, { x: x - xCenter, y: y - yCenter }));

    this.shotAvailable = false;
  }

  getCenter(withVelocity?: 'with velocity'): Center {
    const x = withVelocity ? this.x + this.velocity.x : this.x;
    const y = withVelocity ? this.y + this.velocity.y : this.y;

    const xCenter = x + this.width / 2;
    const yCenter = y + this.height / 2;

    return { xCenter, yCenter };
  }

  draw(c: CanvasRenderingContext2D) {
    const { xCenter, yCenter } = this.getCenter();
    c.setTransform(1, 0, 0, 1, 0, 0);
    c.translate(xCenter, yCenter);
    c.rotate(this.angle);
    c.translate(-xCenter, -yCenter);
    c.drawImage(spaceshipImg, this.x, this.y, this.width, this.height);
    c.setTransform(1, 0, 0, 1, 0, 0);

    if (
      this.accelerating ||
      (this.decelerationTime > 0 && this.decelerationTime < 1)
      // want to show flames as ship is decelerating but not after
    ) {
      this.drawFlames(c);
    }

    this.drawCollisionLine(c);
  }

  drawCollisionLine(c: CanvasRenderingContext2D) {
    if (!this.collisionLine) return;
    c.beginPath();
    c.moveTo(this.collisionLine?.point1.x, this.collisionLine?.point1.y);
    c.lineTo(this.collisionLine?.point2.x, this.collisionLine?.point2.y);
    c.stroke();
  }

  drawFlames(c: CanvasRenderingContext2D) {
    const { xCenter, yCenter } = this.getCenter();

    c.setTransform(1, 0, 0, 1, 0, 0);
    c.translate(xCenter, yCenter);
    c.rotate(this.angle);
    c.translate(-xCenter, -yCenter);

    const length =
      Math.max(
        Math.abs(this.velocity.x / this.speed),
        Math.abs(this.velocity.y / this.speed)
      ) * 40;

    c.fillStyle = '#F18805';
    drawRoundRect(
      c,
      this.x + 27,
      this.y - 5 - length / 1.5,
      3,
      length / 1.5,
      {
        upperLeft: 2,
        upperRight: 2,
      },
      true,
      true
    );
    drawRoundRect(
      c,
      this.x + 19,
      this.y - 5 - length / 1.5,
      3,
      length / 1.5,
      {
        upperLeft: 2,
        upperRight: 2,
      },
      true,
      true
    );
    drawRoundRect(
      c,
      this.x + 23,
      this.y - 5 - length,
      3,
      length,
      {
        upperLeft: 2,
        upperRight: 2,
      },
      true,
      true
    );

    c.setTransform(1, 0, 0, 1, 0, 0);
  }

  alignToMouse(mouse: MouseInterface, bounds: XY) {
    if (mouse.x === null || mouse.y === null) return;
    const { xCenter, yCenter } = this.getCenter();

    const dx = mouse.x - xCenter;
    const dy = mouse.y - yCenter;
    const theta = Math.atan2(dy, dx) - Math.PI / 2;

    const edgesAfterRotation = this.getVertices(theta);
    for (let i = 0; i < edgesAfterRotation.length; i++) {
      if (!checkIfWithinBounds(edgesAfterRotation[i], bounds)) return;
    }

    this.angle = theta;
  }

  resetDeceleration() {
    this.decelerationTime = 0;
  }

  decelerate() {
    switch (true) {
      case this.decelerationTime < 0.85:
        this.decelerationTime += 0.15;
        break;
      default:
        this.decelerationTime += 0.07;
    }

    if (this.decelerationTime > 1) {
      return;
    }
    let key: keyof XY;
    for (key in this.velocity) {
      this.velocity[key] -=
        easeInCirc(this.decelerationTime) * this.velocity[key];
    }
  }

  applyInertia() {
    let key: keyof XY;
    for (key in this.velocity) {
      this.velocity[key] /= 3;
    }
  }

  removeBullet(id: number) {
    this.bullets = this.bullets.filter((b) => b.id !== id);
  }

  getVertices(angle = this.angle): XY[] {
    const { xCenter, yCenter } = this.getCenter();

    const x = this.x;
    const y = this.y;

    const edges = [
      // topLeft:
      {
        x: x - xCenter,
        y: y - yCenter,
      },
      // bottomLeft:
      {
        x: x - xCenter,
        y: y + this.height - yCenter,
      },
      // topRight:
      {
        x: x + this.width - xCenter,
        y: y - yCenter,
      },
      // bottomRight:
      {
        x: x + this.width - xCenter,
        y: y + this.height - yCenter,
      },
    ];

    const afterRotation = edges.map((p) => ({
      x: p.x * Math.cos(angle) - p.y * Math.sin(angle) + xCenter,
      y: p.x * Math.sin(angle) + p.y * Math.cos(angle) + yCenter,
    }));

    return afterRotation;
  }

  getEdges() {
    const { xCenter, yCenter } = this.getCenter();

    const x = this.x;
    const y = this.y;

    const edges = [
      [
        {
          x: x - xCenter,
          y: y - yCenter,
        },
        { x: x - xCenter, y: y + this.height - yCenter },
      ],
      [
        {
          x: x - xCenter,
          y: y - yCenter,
        },
        {
          x: x + this.width - xCenter,
          y: y - yCenter,
        },
      ],
      [
        {
          x: x + this.width - xCenter,
          y: y - yCenter,
        },
        {
          x: x + this.width - xCenter,
          y: y + this.height - yCenter,
        },
      ],
      [
        {
          x: x - xCenter,
          y: y + this.height - yCenter,
        },
        {
          x: x + this.width - xCenter,
          y: y + this.height - yCenter,
        },
      ],
    ].map((v) =>
      v.map((p) => ({
        x: p.x * Math.cos(this.angle) - p.y * Math.sin(this.angle) + xCenter,
        y: p.x * Math.sin(this.angle) + p.y * Math.cos(this.angle) + yCenter,
      }))
    );

    return edges;
  }
}
