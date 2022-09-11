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

function easeInCirc(x: number): number {
  return 1 - Math.sqrt(1 - Math.pow(x, 3));
}

export const spaceshipImg = new Image();
spaceshipImg.src = spaceshipPic;

export default class Spaceship extends Entity {
  angle: number;
  shotAvailable: boolean;
  bullets: Bullet[];
  decelerationTime: number;
  acceleration: number;
  speed: number;

  constructor({ x, y }: XY) {
    super(x, y, 100, 50);
    this.speed = 20;
    this.angle = (90 * Math.PI) / 2;
    this.shotAvailable = true;
    this.decelerationTime = 0;
    this.acceleration = 0.05;
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
    const edges = this.getCorners(this.angle);

    // handle browser edges
    for (let i = 0; i < edges.length; i++) {
      const axis = ['x', 'y'] as (keyof XY)[];
      axis.forEach((axis) => {
        if (
          !checkIfWithinBounds(
            { ...edges[i], [axis]: edges[i][axis] + this.velocity[axis] },
            bounds
          )
        ) {
          this.velocity[axis] = -this.velocity[axis];
          return;
        }
      });
    }

    // handle element boundaries
    boundaries.forEach((boundary) => {
      let collision;

      if (boundary.circle) {
        collision = checkCollisionBtwnCircleAndRect(
          boundary,
          this.getCorners(),
          this.getVertices()
        );
      } else {
        for (let i = 0; i < edges.length; i++) {
          collision = checkShipEdgeCollision(
            {
              y: edges[i].y + this.velocity.y,
              x: edges[i].x + this.velocity.x,
            },
            boundary
          );
          if (collision) break;
        }
      }

      if (collision) {
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

  getCenter(): Center {
    const xCenter = this.x + this.width / 2;
    const yCenter = this.y + this.height / 2;

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
  }

  alignToMouse(mouse: MouseInterface, bounds: XY) {
    if (mouse.x === null || mouse.y === null) return;
    const { xCenter, yCenter } = this.getCenter();

    const dx = mouse.x - xCenter;
    const dy = mouse.y - yCenter;
    const theta = Math.atan2(dy, dx) - Math.PI / 2;

    const edgesAfterRotation = this.getCorners(theta);
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
    let key: keyof typeof this.velocity;
    for (key in this.velocity) {
      this.velocity[key] -=
        easeInCirc(this.decelerationTime) * this.velocity[key];
    }
  }

  applyInertia() {
    let key: keyof typeof this.velocity;
    for (key in this.velocity) {
      this.velocity[key] /= 3;
    }
  }

  removeBullet(id: number) {
    this.bullets = this.bullets.filter((b) => b.id !== id);
  }

  getCorners(angle = this.angle) {
    const { xCenter, yCenter } = this.getCenter();
    const edges = [
      // topLeft:
      {
        x: this.x - xCenter,
        y: this.y - yCenter,
      },
      // bottomLeft:
      {
        x: this.x - xCenter,
        y: this.y + this.height - yCenter,
      },
      // topRight:
      {
        x: this.x + this.width - xCenter,
        y: this.y - yCenter,
      },
      // bottomRight:
      {
        x: this.x + this.width - xCenter,
        y: this.y + this.height - yCenter,
      },
    ];

    const afterRotation = edges.map((p) => ({
      x: p.x * Math.cos(angle) - p.y * Math.sin(angle) + xCenter,
      y: p.x * Math.sin(angle) + p.y * Math.cos(angle) + yCenter,
    }));

    return afterRotation;
  }

  getVertices() {
    const { xCenter, yCenter } = this.getCenter();

    const vertices = [
      [
        {
          x: this.x - xCenter,
          y: this.y - yCenter,
        },
        { x: this.x - xCenter, y: this.y + this.height - yCenter },
      ],
      [
        {
          x: this.x - xCenter,
          y: this.y - yCenter,
        },
        {
          x: this.x + this.width - xCenter,
          y: this.y - yCenter,
        },
      ],
      [
        {
          x: this.x + this.width - xCenter,
          y: this.y - yCenter,
        },
        {
          x: this.x + this.width - xCenter,
          y: this.y + this.height - yCenter,
        },
      ],
      [
        {
          x: this.x - xCenter,
          y: this.y + this.height - yCenter,
        },
        {
          x: this.x + this.width - xCenter,
          y: this.y + this.height - yCenter,
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
