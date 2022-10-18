import Entity from './Entity';
import { XY } from '../../types/types';
export default class Shootable extends Entity {
    lifePoints: number;
    el: HTMLElement;
    circle: boolean;
    constructor(x: number, y: number, width: number, height: number, el: HTMLElement);
    removeEl(): void;
    onHit(): void;
    shake(): void;
    updatePos(): void;
    getCenter(): XY;
}
