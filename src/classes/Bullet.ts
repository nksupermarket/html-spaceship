import { XY } from '../../types/types';
import Entity from './Entity';

let count = 0;

export default class Bullet extends Entity {
  id: number;
  constructor({ x, y }: XY, slope: XY) {
    super(x, y, 5, 5, 5);
    this.velocity = { x: slope.x / this.speed, y: slope.y / this.speed };
    this.id = count++;
  }

  draw(c: CanvasRenderingContext2D) {
    c.fillStyle = 'black';
    c.fillRect(this.x, this.y, this.height, this.width);
  }

  updatePosition() {
    this.x += this.velocity.x;
    this.y += this.velocity.y;
  }
}
