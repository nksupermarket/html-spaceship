import { List } from "../../../types/interfaces";
import {
  BareCircleBoundary,
  BareRectBoundary,
  CircleBoundary,
  RectBoundary,
} from "../entities/boundaries";

export class BoundaryList
  implements
    List<CircleBoundary | RectBoundary, BareRectBoundary | BareCircleBoundary>
{
  list: (CircleBoundary | RectBoundary)[];

  constructor() {
    this.list = this.getList();
  }

  getList() {
    return Array.from(document.querySelectorAll<HTMLElement>(".boundary")).map(
      (el) => {
        return window.getComputedStyle(el).borderRadius === "50%"
          ? new CircleBoundary(el)
          : new RectBoundary(el);
      }
    );
  }

  removeBoundary(i: number) {
    this.list.splice(i, 1);
  }

  convertToBare() {
    return this.list.map((s) => {
      let { el, ...rest } = s;
      return rest;
    });
  }
}
