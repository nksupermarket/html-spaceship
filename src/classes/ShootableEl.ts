import Entity from './Entity';

export default class ShootableEl extends Entity {
  lifePoints: number = 50;
  el: Element;

  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    el: Element
  ) {
    super(x, y, height, width, 0);
    this.el = el;
  }

  removeEl() {
    this.el.className = 'removed';
  }
}
