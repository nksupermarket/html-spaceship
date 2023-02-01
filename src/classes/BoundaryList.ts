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

  removeBoundaryIfEmpty(i: number) {
    if (
      this.list[i].height === 0 ||
      this.list[i].el.classList.contains('removed')
    ) {
      this.list.splice(i, 1);
    }
  }
}
