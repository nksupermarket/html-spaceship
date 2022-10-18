import Boundary from './Boundary';

export default class BoundaryList {
  list: Boundary[];

  constructor() {
    const tmp = Array.from(
      document.querySelectorAll('.boundary')
    ) as HTMLElement[];
    this.list = tmp.map((el: HTMLElement) => new Boundary(el));
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
