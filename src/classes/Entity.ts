import { XY } from '../../types/types';

export default class Entity {
  height: number;
  width: number;
  x: number;
  y: number;
  velocity: XY;

  constructor(x: number, y: number, height: number, width: number) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.velocity = { x: 0, y: 0 };
  }
}
