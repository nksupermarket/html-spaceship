import Boundary from './Boundary';

export default class BoundaryList {
  list: Boundary[];

  constructor() {
    this.list = Array.from(document.querySelectorAll('.boundary')).map(
      (el) => new Boundary(el as HTMLElement)
    );
  }

  removeEmptyBoundaries() {
    this.list = this.list.filter((b) => b.height);
  }

  updateSizes() {
    this.list.forEach((b) => b.recalculateSize());
  }
}
