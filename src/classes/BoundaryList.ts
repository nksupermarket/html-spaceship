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
    this.list = this.list.filter((b) => b.height);
  }

  updateSizes() {
    this.list.forEach((b) => b.recalculateSize());
  }
}
