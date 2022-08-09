import DeltaTimer from './DeltaTimer';
import { Direction } from '../../types/types';

export default class KeyPress {
  keys: Record<
    Direction | 'click',
    { pressed: boolean; timer?: null | DeltaTimer }
  >;
  constructor() {
    this.keys = {
      left: { pressed: false },
      right: { pressed: false },
      up: { pressed: false },
      down: { pressed: false },
      click: { pressed: false, timer: null },
    };
  }

  setTimer(key: 'click', cb: () => void, delay: number) {
    if (this.keys[key].timer) return;

    this.keys[key].timer = new DeltaTimer(cb, delay);
    this.keys[key].timer?.start();
  }

  removeTimer() {
    this.keys.click.timer?.stop();
    this.keys.click.timer = null;
  }
}
