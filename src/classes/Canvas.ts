import { lightenDarkenColor } from '../utils/misc';
import Spaceship from './Spaceship';

export default class Canvas {
  el: HTMLCanvasElement;
  scoreColor: string;

  constructor(scoreColor = '#1DB954') {
    this.el = document.createElement('canvas');
    this.el.classList.add('space');
    document.documentElement.appendChild(this.el);
    this.setCorrectSize();
    this.scoreColor = scoreColor;
  }

  setCorrectSize() {
    this.el.height = window.innerHeight;
    this.el.width = window.innerWidth;
  }

  draw(spaceship: Spaceship, score: number) {
    const c = this.el.getContext('2d');
    if (!c) return;
    c.globalAlpha = 1;
    c.clearRect(0, 0, window.innerWidth, window.innerHeight);

    spaceship.bullets.forEach((b) => b.draw(c));
    spaceship.draw(c);

    c.font = '3em monospace';
    c.globalAlpha = 0.5;
    c.fillStyle = lightenDarkenColor(this.scoreColor, 80);
    c.fillText(this.getScoreText(score), window.innerWidth / 2, 30);
    c.fillStyle = this.scoreColor;
    c.fillText(this.getScoreText(score), 0, 30);
  }

  drawScore() {
    const c = this.el.getContext('2d');
    if (!c) return;
  }

  getScoreText(score: number) {
    const str = score.toString();
    const arr = Array(8);
    for (let i = str.length - 1; i >= 0; i--) {
      arr[arr.length - 1 - ((str.length - 1 - i) % (arr.length - 1))] = str[i];
    }
    for (let i = 0; i < arr.length - str.length - 1; i++) {
      arr[i] = 0;
    }
    return arr.join('');
  }

  remove() {
    this.el.remove();
  }
}
