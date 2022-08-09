import { Center, MouseInterface } from '../../types/interfaces';
import { Direction, XY } from '../../types/types';
import Bullet from './Bullet';
import Entity from './Entity';

export default class Spaceship extends Entity {
  angle: number;
  move: Record<Direction, () => void>;
  shotAvailable: boolean;
  bullets: Bullet[];

  constructor({ x, y }: XY) {
    super(x, y, 100, 50, 20);
    this.angle = (90 * Math.PI) / 2;
    this.shotAvailable = true;
    this.move = {
      left: () => (this.velocity.x = -this.speed),
      right: () => (this.velocity.x = this.speed),
      up: () => (this.velocity.y = -this.speed),
      down: () => (this.velocity.y = this.speed),
    };
    this.bullets = [];
  }

  updatePosition(bounds: XY): void {
    const newX = this.x + this.velocity.x;
    const newY = this.y + this.velocity.y;

    if (newX > 0 && newX + this.width < bounds.x) this.x = newX;
    if (newY > 0 && newY + this.height < bounds.y) this.y = newY;
  }

  shoot() {
    if (!this.shotAvailable) return;
    const { xCenter, yCenter } = this.getCenter();

    const r = this.height / 2;
    const x = r * Math.cos(this.angle + Math.PI / 2) + xCenter;
    const y = r * Math.sin(this.angle + Math.PI / 2) + yCenter;
    console.log({ x: x - xCenter, y: y - yCenter });
    this.bullets.push(new Bullet({ x, y }, { x: x - xCenter, y: y - yCenter }));

    this.shotAvailable = false;
  }

  getCenter(): Center {
    const xCenter = this.x + this.width / 2;
    const yCenter = this.y + this.height / 2;

    return { xCenter, yCenter };
  }

  draw(c: CanvasRenderingContext2D, mouse: MouseInterface) {
    const { xCenter, yCenter } = this.getCenter();

    // get new angle
    if (mouse.x !== null && mouse.y !== null) {
      const dx = mouse.x - xCenter;
      const dy = mouse.y - yCenter;
      const theta = Math.atan2(dy, dx) - Math.PI / 2;
      this.angle = theta;
    }

    c.setTransform(1, 0, 0, 1, 0, 0);

    c.translate(xCenter, yCenter);
    c.rotate(this.angle);
    c.translate(-xCenter, -yCenter);

    c.fillStyle = '#FF0000';
    c.fillRect(this.x, this.y, this.width, this.height);

    c.setTransform(1, 0, 0, 1, 0, 0);
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
}
