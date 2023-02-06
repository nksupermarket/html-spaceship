import Shootable from './Shootable';

export default class Score {
  private total: number;
  display: number;
  private incrementedTotal: number;

  constructor() {
    this.total = 0;
    this.display = 0;
    this.incrementedTotal = 0;
  }

  updateTotal(shootable: Shootable) {
    this.total += Math.floor((shootable.height * shootable.width) / 7);
  }

  updateDisplay() {
    if (this.display === this.total) {
      this.incrementedTotal = 0;
      return;
    }
    const diff = this.total - this.display;
    let increment = 0;
    if (this.incrementedTotal < 10 || diff < 10) increment = 1;
    else if (this.incrementedTotal < 100 || diff < 100) increment = 10;
    else if (this.incrementedTotal < 1000 || diff < 1000) increment = 100;
    else if (this.incrementedTotal < 10000 || diff < 10000) increment = 1000;
    else if (this.incrementedTotal < 100000 || diff < 100000) increment = 10000;

    this.display += increment;
    this.incrementedTotal += increment;

    if (this.display > this.total) {
      this.display = this.total;
    }
  }
}
