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

    // draw score
    const str = score.toString();
    let zeroes = '';
    for (let i = 0; i < 10 - str.length; i++) {
      zeroes += '0';
    }
    const totalWidth = c.measureText(zeroes + str).width;
    const scoreWidth = c.measureText(str).width;
    const totalMid = totalWidth / 2;
    const scoreStart = window.innerWidth / 2 + totalMid - scoreWidth;
    c.font = '3em monospace';
    c.globalAlpha = 0.75;
    c.fillStyle = this.scoreColor;
    c.fillText(str, scoreStart, 48);

    c.globalAlpha = 0.4;
    c.fillText(zeroes, window.innerWidth / 2 - totalMid, 48);
  }

  remove() {
    this.el.remove();
  }
}
