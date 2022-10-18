import Entity from './Entity';
import { XY } from '../../types/types';

export default class Boundary extends Entity {
  el: HTMLElement;
  circle: boolean;

  constructor(el: HTMLElement) {
    const { x, y, height, width } = el.getBoundingClientRect();
    super(x, y, height, width);
    this.el = el;
    this.circle = window.getComputedStyle(el).borderRadius === '50%';
  }

  recalculateSize() {
    const { height, width } = this.el.getBoundingClientRect();
    this.height = height;
    this.width = width;
  }

  updatePos() {
    const { x, y } = this.el.getBoundingClientRect();

    this.x = x;
    this.y = y;
  }

  getCenter(): XY {
    return { x: this.x + this.width / 2, y: this.y + this.height / 2 };
  }
}
