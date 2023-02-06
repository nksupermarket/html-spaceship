import { XY } from '../../types/interfaces';
import { Axis } from '../../types/types';
import Entity from './Entity';
export default class Shootable extends Entity {
    lifePoints: number;
    el: HTMLElement;
    circle: boolean;
    constructor(x: number, y: number, width: number, height: number, el: HTMLElement);
    removeEl(className: string): void;
    onHit(axis: Axis): void;
    shake(axis: Axis): void;
    update(): void;
    getCenter(): XY;
}
