import { Center, MouseInterface, XY } from '../../types/interfaces';
import { Axis, Direction } from '../../types/types';
import { CircleBoundary, RectBoundary } from './boundaries';
import Bullet from './Bullet';
import Entity from './Entity';
interface DecelerateAxis {
    decelerating: boolean;
    scalar: number;
}
interface DecelerateRecord {
    x: DecelerateAxis;
    y: DecelerateAxis;
}
export default class Spaceship extends Entity {
    angle: number;
    shotAvailable: boolean;
    bullets: Bullet[];
    decelerateRecord: DecelerateRecord;
    readonly ACCELERATION_RATE: number;
    accelerating: boolean;
    readonly MAX_SPEED: number;
    velocity: XY;
    readonly IMAGE: HTMLImageElement;
    constructor({ x, y }: XY, theme?: 'dark' | 'light');
    move(dir: Direction): void;
    handleBoundsCollision(bounds: XY): void;
    handleCollisionWithCircle(boundary: CircleBoundary): void;
    handleCollisionWithRect(boundary: RectBoundary): void;
    handleBoundaryCollision(boundaries: (CircleBoundary | RectBoundary)[]): void;
    updateXPosition(shift?: number): void;
    updateYPosition(shift?: number): void;
    shoot(): void;
    getCenter(withVelocity?: 'with velocity'): Center;
    draw(c: CanvasRenderingContext2D): void;
    drawFlames(c: CanvasRenderingContext2D): void;
    alignToMouse(mouse: MouseInterface): void;
    resetDeceleration(axis: Axis): void;
    decelerate(): void;
    removeBullet(i: number): void;
    getVertices(angle?: number): XY[];
    getEdges(): {
        x: number;
        y: number;
    }[][];
}
export {};
