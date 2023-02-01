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

  removeElIfDead(i: number, className: string) {
    if (this.list[i].lifePoints <= 0) {
      this.list[i].removeEl(className);
      this.list.splice(i, 1);
    }
  }
}
