export default class DeltaTimer {
  timeout: NodeJS.Timeout | null;
  lastTime: number;
  onTimerEnd: () => void;
  interval: number;

  constructor(onTimerEnd: () => void, interval: number) {
    this.timeout = null;
    this.lastTime = 0;
    this.onTimerEnd = onTimerEnd;
    this.interval = interval;
    this.loop = this.loop.bind(this);
  }

  loop() {
    const currTime = Date.now();
    const elapsed = currTime - this.lastTime;
    const delay = Math.max(this.interval - elapsed, 0);
    this.timeout = setTimeout(this.loop, delay);
    this.onTimerEnd();
    this.lastTime = Date.now();
  }

  start() {
    this.timeout = setTimeout(this.loop, this.interval);
  }

  stop() {
    this.timeout && clearTimeout(this.timeout);
  }
}
