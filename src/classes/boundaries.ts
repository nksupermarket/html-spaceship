import { XY } from '../../types/interfaces';
import Entity from './Entity';

export default class Boundary extends Entity {
  el: HTMLElement;
  center: XY;

  constructor(el: HTMLElement) {
    const { x, y, height, width } = el.getBoundingClientRect();
    super(x, y, height, width);
    this.el = el;
    this.center = { x: this.x + this.width / 2, y: this.y + this.height / 2 };
  }

  update() {
    const { x, y, height, width } = this.el.getBoundingClientRect();

    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.center = { x: this.x + this.width / 2, y: this.y + this.height / 2 };
  }

  draw(c: CanvasRenderingContext2D) {
    c.strokeRect(this.x, this.y, this.width, this.height);
    c.fillRect(this.center.x, this.center.y, 10, 10);
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
}

export class RectBoundary extends Boundary {
  readonly kind: 'rect';
  vertices: XY[];

  constructor(el: HTMLElement) {
    super(el);
    this.kind = 'rect';
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
        x: this.x,
        y: this.y + this.height,
      },
      {
        x: this.x + this.width,
        y: this.y + this.width,
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
        x: this.x,
        y: this.y + this.height,
      },
      {
        x: this.x + this.width,
        y: this.y + this.height,
      },
    ];

    this.center = { x: this.x + this.width / 2, y: this.y + this.height / 2 };
  }
}
