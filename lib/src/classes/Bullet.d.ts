import Entity from './Entity';
import { XY } from '../../types/interfaces';
declare const bulletSprites: {
    idle: HTMLImageElement[];
    poof: HTMLImageElement[];
};
declare type Action = keyof typeof bulletSprites;
export default class Bullet extends Entity {
    id: number;
    speed: number;
    currAction: Action;
    spriteIdx: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    status: 'alive' | 'dieing' | 'dead';
    velocity: XY;
    constructor({ x, y }: XY, slope: XY);
    draw(c: CanvasRenderingContext2D): void;
    updatePosition(): void;
    increaseSpriteIdx(): void;
    resetSpriteIdx(override?: 'override'): void;
    updateAction(action: Action): void;
    update(bounds: XY): void;
    onHit(): void;
    getCenter(): {
        x: number;
        y: number;
    };
}
export {};
