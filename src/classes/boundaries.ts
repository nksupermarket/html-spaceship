import Entity from './Entity';
import { Bound } from '../../types/types';
import Line from './Line';
import { XY } from '../../types/interfaces';

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
  readonly kind: 'circle';
  readonly radius: number;
  constructor(el: HTMLElement) {
    super(el);
    this.kind = 'circle';
    this.radius = this.width / 2;
  }

  getCenter(): XY {
    return { x: this.x + this.width / 2, y: this.y + this.height / 2 };
  }
}

export class RectBoundary extends Boundary {
  readonly kind: 'rect';
  edges: Bound<Line>;
  constructor(el: HTMLElement) {
    super(el);
    this.kind = 'rect';
    this.edges = {
      top: new Line(
        { x: this.x, y: this.y },
        { x: this.x + this.width, y: this.y }
      ),
      left: new Line(
        { x: this.x, y: this.y },
        { x: this.x, y: this.y + this.height }
      ),
      right: new Line(
        { x: this.x + this.width, y: this.y },
        { x: this.x + this.width, y: this.y + this.height }
      ),
      bottom: new Line(
        { x: this.x, y: this.y + this.height },
        { x: this.x + this.width, y: this.y + this.height }
      ),
    };
  }
}
