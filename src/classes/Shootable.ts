import Entity from './Entity';
import { XY } from '../../types/types';

export default class Shootable extends Entity {
  lifePoints: number = 50;
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

  getCenter(): XY {
    return { x: this.x + this.width / 2, y: this.y + this.height / 2 };
  }
}
