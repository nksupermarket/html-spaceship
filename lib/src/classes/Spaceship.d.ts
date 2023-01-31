import { Center, MouseInterface, XY } from '../../types/interfaces';
import { Direction } from '../../types/types';
import { CircleBoundary, RectBoundary } from './boundaries';
import Bullet from './Bullet';
import Entity from './Entity';
export default class Spaceship extends Entity {
    angle: number;
    shotAvailable: boolean;
    bullets: Bullet[];
    decelerationTime: number;
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
    resetDeceleration(): void;
    decelerate(): void;
    applyInertia(): void;
    removeBullet(id: number): void;
    getVertices(angle?: number): XY[];
    getEdges(): {
        x: number;
        y: number;
    }[][];
}
