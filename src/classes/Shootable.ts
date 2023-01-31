import { XY } from '../../types/interfaces';
import Entity from './Entity';

export default class Shootable extends Entity {
  lifePoints: number = 30;
  el: HTMLElement;
  circle: boolean;

  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    el: HTMLElement
  ) {
    super(x, y, height, width);
    this.el = el;
    this.circle = window.getComputedStyle(el).borderRadius === '50%';
  }

  removeEl() {
    this.el.className = 'removed';
  }

  onHit() {
    this.lifePoints -= 10;
    this.shake();
  }

  shake() {
    this.el.classList.remove('shake');
    void this.el.offsetWidth;
    this.el.classList.add('shake');
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
