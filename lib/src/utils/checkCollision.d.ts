import { XY } from '../../types/types';
import Boundary from '../classes/Boundary';
import Bullet from '../classes/Bullet';
import Entity from '../classes/Entity';
import Shootable from '../classes/Shootable';
export declare function checkIfInsideRect(
  rectOne: Entity,
  rectTwo: Entity
): boolean;
export declare function checkShipCollision(edge: XY, rect: Entity): boolean;
export declare function checkIfWithinBounds(edge: XY, bounds: XY): boolean;
export declare function checkCollisionBtwnCircleAndRect(
  circle: Shootable | Boundary,
  rectCorners: XY[],
  rectVertices: XY[][]
): boolean;
export declare function checkCollisionBtwnCircles(
  c1: Shootable | Bullet,
  c2: Shootable | Bullet
): boolean;
