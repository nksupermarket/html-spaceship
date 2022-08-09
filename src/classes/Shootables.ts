import ShootableEl from './ShootableEl';

export default class Shootables {
  list: ShootableEl[];

  constructor() {
    this.list = Array.from(document.querySelectorAll('.shootable_el')).map(
      (el) => {
        const { x, y, height, width } = el.getBoundingClientRect();
        return new ShootableEl(x, y, width, height, el);
      }
    );
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
