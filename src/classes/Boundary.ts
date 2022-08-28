import Entity from './Entity';

export default class Boundary extends Entity {
  el: HTMLElement;
  constructor(el: HTMLElement) {
    const { x, y, height, width } = el.getBoundingClientRect();
    super(x, y, height, width);
    this.el = el;
  }

  recalculateSize() {
    const { height, width } = this.el.getBoundingClientRect();
    this.height = height;
    this.width = width;
  }
}
