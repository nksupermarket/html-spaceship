import { CircleBoundary, RectBoundary } from './boundaries';

export default class BoundaryList {
  list: (CircleBoundary | RectBoundary)[];

  constructor() {
    this.list = this.getList();
  }

  getList() {
    return Array.from(document.querySelectorAll<HTMLElement>('.boundary')).map(
      (el) => {
        return window.getComputedStyle(el).borderRadius === '50%'
          ? new CircleBoundary(el)
          : new RectBoundary(el);
      }
    );
  }

  removeBoundary(i: number) {
    this.list.splice(i, 1);
  }
}
