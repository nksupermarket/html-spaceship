import { List } from "../../../types/interfaces";
import Shootable, { BareShootable } from "../entities/Shootable";

export class ShootableList implements List<Shootable, BareShootable> {
  list: Shootable[];

  constructor() {
    this.list = this.getList();
  }

  getList() {
    return Array.from(
      document.querySelectorAll<HTMLElement>(".shootable_el")
    ).map((el) => {
      const { x, y, height, width } = el.getBoundingClientRect();
      return new Shootable(x, y, width, height, el);
    });
  }

  removeEl(i: number, className: string) {
    this.list[i].removeEl(className);
    this.list.splice(i, 1);
  }

  convertToBare() {
    return this.list.map((s) => {
      let { el, ...rest } = s;
      return rest;
    });
  }
}
