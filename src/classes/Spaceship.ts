import { Center, MouseInterface, XY } from '../../types/interfaces';
import { Direction } from '../../types/types';
import { getCollisionBetweenRectAndCircle } from '../utils/checkCollision';
import { SS_DIMENSIONS } from '../utils/constants';
import { createImage, getExtremities } from '../utils/misc';
import { CircleBoundary, RectBoundary } from './boundaries';
import Bullet from './Bullet';
import Entity from './Entity';

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

export default class Spaceship extends Entity {
  angle: number;
  shotAvailable: boolean;
  bullets: Bullet[];
  decelerationTime: number;
  readonly ACCELERATION_RATE: number;
  accelerating: boolean;
  readonly MAX_SPEED: number;
  velocity: XY;
  readonly IMAGE: HTMLImageElement;

  constructor({ x, y }: XY, theme?: 'dark' | 'light') {
    theme = theme || 'light';
    console.log(theme);
    super(x, y, SS_DIMENSIONS.height, SS_DIMENSIONS.width);
    this.MAX_SPEED = 10;
    this.angle = (90 * Math.PI) / 2;
    this.shotAvailable = true;
    this.decelerationTime = 0;
    this.ACCELERATION_RATE = 0.05;
    this.accelerating = false;
    this.bullets = [];
    this.velocity = { x: 0, y: 0 };
    this.IMAGE = createImage(
      theme === 'light'
        ? require('../assets/optimized/rocket-lightmode.png').default
        : require('../assets/optimized/rocket-darkmode.png').default
    );
  }

  move(dir: Direction) {
    this.resetDeceleration();
    switch (dir) {
      case 'left': {
        this.velocity.x -= this.ACCELERATION_RATE * this.MAX_SPEED;
        if (this.velocity.x < -this.MAX_SPEED)
          this.velocity.x = -this.MAX_SPEED;
        break;
      }
      case 'right': {
        this.velocity.x += this.ACCELERATION_RATE * this.MAX_SPEED;
        if (this.velocity.x > this.MAX_SPEED) this.velocity.x = this.MAX_SPEED;
        break;
      }
      case 'up': {
        this.velocity.y -= this.ACCELERATION_RATE * this.MAX_SPEED;
        if (this.velocity.y < -this.MAX_SPEED)
          this.velocity.y = -this.MAX_SPEED;
        break;
      }
      case 'down': {
        this.velocity.y += this.ACCELERATION_RATE * this.MAX_SPEED;
        if (this.velocity.y > this.MAX_SPEED) this.velocity.y = this.MAX_SPEED;
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

  handleCollisionWithCircle(boundary: CircleBoundary) {
    const collision = getCollisionBetweenRectAndCircle(
      boundary.getCenter(),
      boundary.radius,
      this.getVertices()
    );
    if (!collision) return;
    const { correction, normal } = collision;

    this.updateXPosition(correction.x);
    this.updateYPosition(correction.y);

    // explanation of how collision is resolved https://stackoverflow.com/a/4523556/6815335
    normal.normalize();
    const distanceAlongNormal = normal.getDotProduct(this.velocity);

    this.velocity.x -= 2.0 * distanceAlongNormal * normal.x;
    this.velocity.y -= 2.0 * distanceAlongNormal * normal.y;
  }

  handleCollisionWithRect(boundary: RectBoundary) {
    const vertices = this.getVertices();

    let collision = null;
    for (let i = 0; i < vertices.length; i++) {
      const collideY =
        boundary.y <= vertices[i].y &&
        boundary.y + boundary.height > vertices[i].y;
      const collideX =
        boundary.x <= vertices[i].x &&
        boundary.x + boundary.width > vertices[i].x;

      if (collideY && collideX) {
        // find whether the edge the ship collided with is a horizontal edge or vertical by comparing how deep the ship is on x and y axis. Deeper on x-axis means the ship hit a horizontal edge, deeper on y-axis means the ship hit a vertical edge
        const sizeOfYPenetration = Math.min(
          vertices[i].y - boundary.y,
          boundary.y + boundary.height - vertices[i].y
        );
        const sizeOfXPenetration = Math.min(
          vertices[i].x - boundary.x,
          boundary.x + boundary.width - vertices[i].x
        );
        collision =
          sizeOfYPenetration > sizeOfXPenetration
            ? {
                axis: 'x',
                amount: sizeOfXPenetration,
              }
            : {
                axis: 'y',
                amount: sizeOfYPenetration,
              };
      }
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

  handleBoundaryCollision(boundaries: (CircleBoundary | RectBoundary)[]) {
    boundaries.forEach((boundary) => {
      if (boundary.kind === 'circle') {
        this.handleCollisionWithCircle(boundary);
      } else if (boundary.kind === 'rect') {
        this.handleCollisionWithRect(boundary);
      }
    });
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
    c.drawImage(this.IMAGE, this.x, this.y, this.width, this.height);
    c.setTransform(1, 0, 0, 1, 0, 0);

    if (
      this.accelerating ||
      (this.decelerationTime > 0 && this.decelerationTime < 1)
      // want to show flames as ship is decelerating but not after
    ) {
      this.drawFlames(c);
    }
  }

  drawFlames(c: CanvasRenderingContext2D) {
    const { xCenter, yCenter } = this.getCenter();

    c.setTransform(1, 0, 0, 1, 0, 0);
    c.translate(xCenter, yCenter);
    c.rotate(this.angle);
    c.translate(-xCenter, -yCenter);

    const length =
      Math.max(
        Math.abs(this.velocity.x / this.MAX_SPEED),
        Math.abs(this.velocity.y / this.MAX_SPEED)
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

  alignToMouse(mouse: MouseInterface) {
    if (mouse.x === null || mouse.y === null) return;
    const { xCenter, yCenter } = this.getCenter();

    const dx = mouse.x - xCenter;
    const dy = mouse.y - yCenter;
    // subtract 90deg so that spaceship nose faces mouse
    const theta = Math.atan2(dy, dx) - Math.PI / 2;

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
