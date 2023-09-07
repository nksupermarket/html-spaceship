import { XY } from "../../types/interfaces";
import { NonFunctionPropertyNames } from "../../types/types";
import Entity from "./Entity";

export default class Boundary extends Entity {
  el: HTMLElement;

  constructor(el: HTMLElement) {
    const { x, y, height, width } = el.getBoundingClientRect();
    super(x, y, height, width);
    this.el = el;
  }

  update() {
    const { x, y, height, width } = this.el.getBoundingClientRect();

    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
  }
}

export class CircleBoundary extends Boundary {
  readonly kind: "circle";
  readonly radius: number;
  constructor(el: HTMLElement) {
    super(el);
    this.kind = "circle";
    this.radius = this.width / 2;
  }
}
export type BareCircleBoundary = Omit<
  Pick<CircleBoundary, NonFunctionPropertyNames<CircleBoundary>>,
  "el"
>;

export class RectBoundary extends Boundary {
  readonly kind: "rect";
  vertices: XY[];

  constructor(el: HTMLElement) {
    super(el);
    this.kind = "rect";
    this.vertices = [
      {
        x: this.x,
        y: this.y,
      },
      {
        x: this.x + this.width,
        y: this.y,
      },
      {
        x: this.x + this.width,
        y: this.y + this.height,
      },
      {
        x: this.x,
        y: this.y + this.height,
      },
    ];
  }

  update() {
    const { x, y, height, width } = this.el.getBoundingClientRect();

    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;

    this.vertices = [
      {
        x: this.x,
        y: this.y,
      },
      {
        x: this.x + this.width,
        y: this.y,
      },

      {
        x: this.x + this.width,
        y: this.y + this.height,
      },
      {
        x: this.x,
        y: this.y + this.height,
      },
    ];
  }
}
export type BareRectBoundary = Omit<
  Pick<RectBoundary, NonFunctionPropertyNames<RectBoundary>>,
  "el"
>;
