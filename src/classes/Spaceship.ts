import { Center, MouseInterface } from '../../types/interfaces';
import { Direction, XY } from '../../types/types';
import {
  checkCollisionBtwnCircleAndRect,
  checkIfWithinBounds,
  checkShipEdgeCollision,
} from '../utils/checkCollision';
import Boundary from './Boundary';
import Bullet from './Bullet';
import Entity from './Entity';
import spaceshipPic from '../assets/rocket-lightmode.png';
import { createImage } from '../utils/misc';
import { SS_DIM } from '../utils/constants';

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

  constructor({ x, y }: XY) {
    super(x, y, SS_DIM.height, SS_DIM.width);
    this.speed = 10;
    this.angle = (90 * Math.PI) / 2;
    this.shotAvailable = true;
    this.decelerationTime = 0;
    this.acceleration = 0.05;
    this.accelerating = false;
    this.bullets = [];
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

  bounce(bounds: XY, boundaries: Boundary[]) {
    const edges = this.getCorners('with velocity');

    // handle browser edges
    for (let i = 0; i < edges.length; i++) {
      if (!checkIfWithinBounds(edges[i], bounds)) {
        this.velocity.x = -this.velocity.x;
        this.velocity.y = -this.velocity.y;
        return;
      }
    }

    // handle element boundaries
    boundaries.forEach((boundary) => {
      let collision;

      if (boundary.circle) {
        collision = checkCollisionBtwnCircleAndRect(
          boundary,
          this.getCorners('with velocity'),
          this.getVertices('with velocity')
        );
      } else {
        for (let i = 0; i < edges.length; i++) {
          collision = checkShipEdgeCollision(edges[i], boundary);
          if (collision) break;
        }
      }

      if (collision) {
        console.log(boundary.el.textContent);
        this.velocity.x = -this.velocity.x;
        this.velocity.y = -this.velocity.y;
      }
    });
  }

  updateXPosition() {
    this.x += this.velocity.x;
    if (this.x < 0) this.x = 0;
  }

  updateYPosition() {
    this.y += this.velocity.y;
    if (this.y < 0) this.y = 0;
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

    const edgesAfterRotation = this.getCorners(undefined, theta);
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

  getCorners(withVelocity?: 'with velocity', angle = this.angle) {
    const { xCenter, yCenter } = this.getCenter(withVelocity);

    const x = withVelocity ? this.x + this.velocity.x : this.x;
    const y = withVelocity ? this.y + this.velocity.y : this.y;

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

  getVertices(withVelocity?: 'with velocity') {
    const { xCenter, yCenter } = this.getCenter(withVelocity);

    const x = withVelocity ? this.x + this.velocity.x : this.x;
    const y = withVelocity ? this.y + this.velocity.y : this.y;

    const vertices = [
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

    return vertices;
  }
}
