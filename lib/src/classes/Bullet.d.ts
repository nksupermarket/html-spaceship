/// <reference types="@types/offscreencanvas" />
import Entity from "./Entity";
import { XY } from "../../types/interfaces";
import { Deactive } from "../../types/types";
declare type ActiveBulletSprites = {
    idle: ImageBitmap[];
    poof: ImageBitmap[];
};
declare let bulletSprites: ActiveBulletSprites | Deactive<ActiveBulletSprites>;
export declare const activateBulletSprites: () => Promise<void>;
declare type Action = keyof typeof bulletSprites;
export default class Bullet extends Entity {
    id: number;
    speed: number;
    currAction: Action;
    spriteIdx: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    status: "alive" | "dieing" | "dead";
    velocity: XY;
    constructor({ x, y }: XY, slope: XY);
    draw(c: CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D): void;
    updatePosition(): void;
    increaseSpriteIdx(): void;
    resetSpriteIdx(override?: "override"): void;
    updateAction(action: Action): void;
    update(bounds: XY): void;
    onHit(): void;
    getCenter(): {
        x: number;
        y: number;
    };
}
export {};
