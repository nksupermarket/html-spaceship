import { CircleBoundary, RectBoundary } from './boundaries';
export default class BoundaryList {
    list: (CircleBoundary | RectBoundary)[];
    constructor();
    getList(): (CircleBoundary | RectBoundary)[];
    removeBoundary(i: number): void;
}
