/// <reference types="@types/offscreencanvas" />
import { MouseInterface, XY } from "../../types/interfaces";
import { Axis, Direction } from "../../types/types";
import Boundary, { BareCircleBoundary, BareRectBoundary } from "./boundaries";
import Bullet from "./Bullet";
import Entity from "./Entity";
import Polygon from "./Polygon";
declare type DecelerateScalars = Record<Axis, number>;
export declare type SpaceshipEventState = Pick<Spaceship, "shotAvailable" | "accelerating">;
export declare class Spaceship extends Entity {
    angle: number;
    shotAvailable: boolean;
    bullets: Bullet[];
    decelerateScalars: DecelerateScalars;
    readonly ACCELERATION_RATE: number;
    accelerating: boolean;
    readonly MAX_SPEED: number;
    velocity: XY;
    readonly IMAGE: ImageBitmap;
    readonly CONVEX_POLYGONS: Polygon[];
    readonly BOUNDING_BOX: Polygon;
    colliding: boolean;
    constructor({ x, y }: XY, image: ImageBitmap, speed: number);
    static getStartPos(boundaries: Boundary[]): {
        x: number;
        y: number;
    };
    move(dir: Direction): void;
    handleBoundsCollision(bounds: XY): void;
    handleCollisionWithCircle(boundary: BareCircleBoundary): void;
    handleCollisionWithRect(boundary: BareRectBoundary): void;
    updateXPosition(shift?: number): void;
    updateYPosition(shift?: number): void;
    shoot(): void;
    getCenter(): XY;
    draw(c: CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D): void;
    drawFlames(c: CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D): void;
    alignToMouse(mouse: MouseInterface): void;
    resetDeceleration(axis: Axis): void;
    decelerate(axis: Axis): void;
    removeBullet(i: number): void;
    getVerticesBoundingBox(): XY[];
    getPolygons(): Polygon[];
}
export {};
