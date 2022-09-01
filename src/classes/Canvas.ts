import { Direction, Mouse } from '../../types/types';
import { DIRECTIONS } from '../utils/constants';
import Shootables from './ShootableList';
import Boundary from './Boundary';
import Spaceship from './Spaceship';
import { checkIfInsideRect } from '../utils/checkCollision';
import KeyPress from './KeyPress';
import BoundaryList from './BoundaryList';

export default class Canvas {
  el: HTMLCanvasElement;

  constructor() {
    this.el = document.createElement('canvas');
    document.body.appendChild(this.el);
    this.setCorrectSize();
  }

  setCorrectSize() {
    this.el.height = window.innerHeight;
    this.el.width = window.innerWidth;
  }

  draw(spaceship: Spaceship) {
    const c = this.el.getContext('2d');
    if (!c) return;

    c.clearRect(0, 0, window.innerWidth, window.innerHeight);

    spaceship.bullets.forEach((b) => b.draw(c));
    spaceship.draw(c);
  }
}
