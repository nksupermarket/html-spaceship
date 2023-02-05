import { Mouse } from '../../types/types';
import BoundaryList from './BoundaryList';
import Spaceship from './Spaceship';

export default class Canvas {
  el: HTMLCanvasElement;

  constructor() {
    this.el = document.createElement('canvas');
    this.el.classList.add('space');
    document.documentElement.appendChild(this.el);
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

  remove() {
    this.el.remove();
  }
}
