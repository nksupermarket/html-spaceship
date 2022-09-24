import { Center, MouseInterface } from '../../types/interfaces';
import { Direction, XY } from '../../types/types';
import Boundary from './Boundary';
import Bullet from './Bullet';
import Entity from './Entity';
export declare const spaceshipImg: HTMLImageElement;
export default class Spaceship extends Entity {
  angle: number;
  shotAvailable: boolean;
  bullets: Bullet[];
  decelerationTime: number;
  acceleration: number;
  accelerating: boolean;
  speed: number;
  constructor({ x, y }: XY);
  move(dir: Direction): void;
  bounce(bounds: XY, boundaries: Boundary[]): void;
  updateXPosition(): void;
  updateYPosition(): void;
  shoot(): void;
  getCenter(withVelocity?: 'with velocity'): Center;
  draw(c: CanvasRenderingContext2D): void;
  drawFlames(c: CanvasRenderingContext2D): void;
  alignToMouse(mouse: MouseInterface, bounds: XY): void;
  resetDeceleration(): void;
  decelerate(): void;
  applyInertia(): void;
  removeBullet(id: number): void;
  getCorners(
    withVelocity?: 'with velocity',
    angle?: number
  ): {
    x: number;
    y: number;
  }[];
  getVertices(withVelocity?: 'with velocity'): {
    x: number;
    y: number;
  }[][];
}
