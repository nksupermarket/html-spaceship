import { XY } from '../../types/interfaces';
import Entity from './Entity';
export default class Shootable extends Entity {
    lifePoints: number;
    el: HTMLElement;
    circle: boolean;
    constructor(x: number, y: number, width: number, height: number, el: HTMLElement);
    removeEl(className: string): void;
    onHit(): void;
    shake(): void;
    updatePos(): void;
    getCenter(): XY;
}
