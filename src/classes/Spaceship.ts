import { Center, MouseInterface } from '../../types/interfaces';
import { Direction, Edges, Entries, XY } from '../../types/types';
import { checkIfWithinBounds } from '../utils/checkCollision';
import Bullet from './Bullet';
import DeltaTimer from './DeltaTimer';
import Entity from './Entity';

const DECELERATION_INTERVAL = 10;
function easeInCirc(x: number): number {
  return 1 - Math.sqrt(1 - Math.pow(x, 2));
}

function easeOutQuart(x: number): number {
  return 1 - Math.pow(1 - x, 4);
}

export default class Spaceship extends Entity {
  angle: number;
  move: Record<Direction, (bounds: XY) => void>;
  shotAvailable: boolean;
  bullets: Bullet[];
  decelerationTimer: DeltaTimer;
  decelerationTime: number;

  constructor({ x, y }: XY) {
    super(x, y, 100, 50, 30);
    this.angle = (90 * Math.PI) / 2;
    this.shotAvailable = true;
    this.decelerationTime = 0;
    this.decelerationTimer = new DeltaTimer(() => {
      // bezier curve function takes in val from 0 - 1 and spits out val 0 - 1
      if (this.decelerationTime / (10 * DECELERATION_INTERVAL) >= 1) {
        this.decelerationTimer.stop();
        this.decelerationTime = 0;
        return;
      }
      this.decelerationTime += DECELERATION_INTERVAL;

      let key: keyof typeof this.velocity;
      for (key in this.velocity) {
        this.velocity[key] -=
          easeOutQuart(this.decelerationTime / (10 * DECELERATION_INTERVAL)) *
          this.velocity[key];
      }
    }, DECELERATION_INTERVAL);

    this.move = {
      left: (bounds: XY) => {
        const edges = this.getOutermostPoints(this.angle);
        for (let i = 0; i < edges.length; i++) {
          if (
            !checkIfWithinBounds(
              { ...edges[i], x: edges[i].x - this.speed },
              bounds
            )
          )
            return;
        }
        this.resetDeceleration();
        this.velocity.x = -this.speed;
      },
      right: (bounds: XY) => {
        const edges = this.getOutermostPoints(this.angle);
        for (let i = 0; i < edges.length; i++) {
          if (
            !checkIfWithinBounds(
              { ...edges[i], x: edges[i].x + this.speed },
              bounds
            )
          ) {
            return;
          }
        }

        this.resetDeceleration();
        this.velocity.x = this.speed;
      },
      up: (bounds: XY) => {
        const edges = this.getOutermostPoints(this.angle);
        for (let i = 0; i < edges.length; i++) {
          if (
            !checkIfWithinBounds(
              { ...edges[i], y: edges[i].y - this.speed },
              bounds
            )
          )
            return;
        }

        this.resetDeceleration();
        this.velocity.y = -this.speed;
      },
      down: (bounds: XY) => {
        const edges = this.getOutermostPoints(this.angle);
        for (let i = 0; i < edges.length; i++) {
          if (
            !checkIfWithinBounds(
              { ...edges[i], y: edges[i].y + this.speed },
              bounds
            )
          )
            return;
        }

        this.resetDeceleration();
        this.velocity.y = this.speed;
      },
    };
    this.bullets = [];
  }

  updatePosition() {
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
    this.decelerationTimer.stop();
  }

  decelerate() {
    this.decelerationTimer.start();
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
    const edges = {
      topLeft: {
        x: this.x - xCenter,
        y: this.y - yCenter,
      },
      bottomLeft: {
        x: this.x - xCenter,
        y: this.y + this.height - yCenter,
      },
      topRight: {
        x: this.x + this.width - xCenter,
        y: this.y - yCenter,
      },
      bottomRight: {
        x: this.x + this.width - xCenter,
        y: this.y + this.height - yCenter,
      },
    };

    const values = Object.values(edges);

    const afterRotation = values.reduce<XY[]>((acc, curr) => {
      acc.push({
        x: curr.x * Math.cos(angle) - curr.y * Math.sin(angle) + xCenter,
        y: curr.x * Math.sin(angle) + curr.y * Math.cos(angle) + yCenter,
      });

      return acc;
    }, []);

    return afterRotation;
  }
}
