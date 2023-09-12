import { Option } from "../../types/types";

export class FpsTracker {
  private lastLoop: Option<number>;

  constructor() {
    this.lastLoop = null;
  }

  hasStarted() {
    return this.lastLoop != null;
  }

  update() {
    this.lastLoop = performance.now();
  }

  isAlignedTo(fps: number) {
    let interval = 1000 / fps;
    return performance.now() - this.lastLoop! > interval;
  }

  print() {
    const fps = 1000 / (performance.now() - this.lastLoop!);
    console.log(fps);
  }
}
