import { CircleBoundary, RectBoundary } from './boundaries';
export default class BoundaryList {
    list: (CircleBoundary | RectBoundary)[];
    constructor();
    removeEmptyBoundaries(): void;
    updatePositions(): void;
    updateSizes(): void;
}
