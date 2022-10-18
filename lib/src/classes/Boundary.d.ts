import Entity from './Entity';
import { XY } from '../../types/types';
export default class Boundary extends Entity {
    el: HTMLElement;
    circle: boolean;
    constructor(el: HTMLElement);
    recalculateSize(): void;
    updatePos(): void;
    getCenter(): XY;
}
