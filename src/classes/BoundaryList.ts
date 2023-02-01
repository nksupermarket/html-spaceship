import Boundary, { CircleBoundary, RectBoundary } from './boundaries';

export default class BoundaryList {
  list: (CircleBoundary | RectBoundary)[];

  constructor() {
    const tmp = Array.from(
      document.querySelectorAll('.boundary')
    ) as HTMLElement[];
    this.list = tmp.map((el: HTMLElement) => {
      return window.getComputedStyle(el).borderRadius === '50%'
        ? new CircleBoundary(el)
        : new RectBoundary(el);
    });
  }

  removeEmptyBoundaries() {
    this.list = this.list.filter((b) => {
      return b.height && !b.el.classList.contains('removed');
    });
  }

  removeBoundaryIfEmpty(i: number) {
    if (
      this.list[i].height === 0 ||
      this.list[i].el.classList.contains('removed')
    ) {
      this.list.splice(i, 1);
    }
  }

  updatePositions() {
    this.list.forEach((b) => b.updatePos());
  }

  updateSizes() {
    this.list.forEach((b) => b.recalculateSize());
  }
}
