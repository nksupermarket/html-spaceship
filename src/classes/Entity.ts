import { XY } from '../../types/types';

export default class Entity {
  readonly height: number;
  readonly width: number;
  readonly speed: number = 0;
  x: number;
  y: number;
  velocity: XY;

  constructor(
    x: number,
    y: number,
    height: number,
    width: number,
    speed: number
  ) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.speed = speed;
    this.velocity = { x: 0, y: 0 };
  }
}
