import Boundary, { CircleBoundary, RectBoundary } from './Boundary';

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

  updatePositions() {
    this.list.forEach((b) => b.updatePos());
  }

  updateSizes() {
    this.list.forEach((b) => b.recalculateSize());
  }
}
