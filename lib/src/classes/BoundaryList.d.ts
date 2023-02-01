import { CircleBoundary, RectBoundary } from './boundaries';
export default class BoundaryList {
    list: (CircleBoundary | RectBoundary)[];
    constructor();
    removeBoundaryIfEmpty(i: number, removeClass: string): void;
}
