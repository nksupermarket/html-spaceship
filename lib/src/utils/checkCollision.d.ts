import { XY } from '../../types/interfaces';
import Bullet from '../classes/Bullet';
import Entity from '../classes/Entity';
import Shootable from '../classes/Shootable';
import Vector from '../classes/Vector';
export declare function checkIfInsideRect(rectOne: Entity, rectTwo: Entity): boolean;
export declare function getCollisionBetweenRectAndCircle(centerOfCircle: XY, r: number, rectVertices: XY[]): {
    normal: Vector;
    correction: {
        x: number;
        y: number;
    };
} | null;
export declare function checkCollisionBtwnCircles(c1: Shootable | Bullet, c2: Shootable | Bullet): boolean;
