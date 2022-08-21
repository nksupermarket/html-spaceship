import { Center, MouseInterface } from '../../types/interfaces';
import { Direction, XY } from '../../types/types';
import {
  checkIfWithinBounds,
  checkShipEdgeCollision,
} from '../utils/checkCollision';
import Bullet from './Bullet';
import Entity from './Entity';
import ShootableEl from './ShootableEl';

function easeInCirc(x: number): number {
  return 1 - Math.sqrt(1 - Math.pow(x, 3));
}

export default class Spaceship extends Entity {
  angle: number;
  shotAvailable: boolean;
  bullets: Bullet[];
  decelerationTime: number;
  acceleration: number;

  constructor({ x, y }: XY) {
    super(x, y, 100, 50, 20);
    this.angle = (90 * Math.PI) / 2;
    this.shotAvailable = true;
    this.decelerationTime = 0;
    this.acceleration = 0.05;
    this.bullets = [];
  }

  move(dir: Direction) {
    this.resetDeceleration();
    console.log(this.velocity.x);
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

  bounce(bounds: XY, rects: ShootableEl[]) {
    const edges = this.getOutermostPoints(this.angle);

    for (let i = 0; i < edges.length; i++) {
      const axis = ['x', 'y'] as unknown as (keyof XY)[];
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

        rects.forEach((rect) => {
          const collision = checkShipEdgeCollision(
            {
              y: edges[i].y + this.velocity.y,
              x: edges[i].x + this.velocity.x,
            },
            rect
          );
          if (collision) {
            this.velocity.x = -this.velocity.x;
            this.velocity.y = -this.velocity.y;
          }
        });
      });
    }
  }

  updatePosition(bounds: XY, rects: ShootableEl[]) {
    this.bounce(bounds, rects);

    this.x += this.velocity.x;
    this.y += this.velocity.y;
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

    c.fillStyle = '#FF0000';
    c.fillRect(this.x, this.y, this.width, this.height);

    c.setTransform(1, 0, 0, 1, 0, 0);
  }

  rotate(mouse: MouseInterface, bounds: XY) {
    if (mouse.x === null || mouse.y === null) return;
    const { xCenter, yCenter } = this.getCenter();

    const dx = mouse.x - xCenter;
    const dy = mouse.y - yCenter;
    const theta = Math.atan2(dy, dx) - Math.PI / 2;

    const edgesAfterRotation = this.getOutermostPoints(theta);
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

  getOutermostPoints(angle: number) {
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

    const afterRotation = edges.reduce<XY[]>((acc, curr) => {
      acc.push({
        x: curr.x * Math.cos(angle) - curr.y * Math.sin(angle) + xCenter,
        y: curr.x * Math.sin(angle) + curr.y * Math.cos(angle) + yCenter,
      });

      return acc;
    }, []);

    return afterRotation;
  }
}
