import Shootable from './Shootable';

export default class ShootableList {
  list: Shootable[];

  constructor() {
    this.list = this.getList();
  }

  getList() {
    return Array.from(
      document.querySelectorAll<HTMLElement>('.shootable_el')
    ).map((el) => {
      const { x, y, height, width } = el.getBoundingClientRect();
      return new Shootable(x, y, width, height, el);
    });
  }

  removeDeadEls() {
    this.list = this.list.filter((se) => {
      if (se.lifePoints <= 0) {
        se.removeEl();
      }

      return se.lifePoints > 0;
    });
  }
}
