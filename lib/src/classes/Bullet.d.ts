import { XY } from '../../types/types';
import Entity from './Entity';
declare const bulletSprites: {
  idle: HTMLImageElement[];
  poof: HTMLImageElement[];
};
declare type Action = keyof typeof bulletSprites;
export default class Bullet extends Entity {
  id: number;
  speed: 5;
  currAction: Action;
  spriteIdx: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  status: 'alive' | 'dieing' | 'dead';
  constructor({ x, y }: XY, slope: XY);
  draw(c: CanvasRenderingContext2D): void;
  updatePosition(): void;
  increaseSpriteIdx(): void;
  resetSpriteIdx(override?: 'override'): void;
  updateAction(action: Action): void;
  update(): void;
  onHit(): void;
  getCenter(): {
    x: number;
    y: number;
  };
}
export {};
