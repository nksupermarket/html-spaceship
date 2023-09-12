import { CircleBoundary, RectBoundary } from "./boundaries";
export declare class BoundaryList {
    list: (CircleBoundary | RectBoundary)[];
    constructor();
    getList(): (CircleBoundary | RectBoundary)[];
    removeBoundary(i: number): void;
}
