import { XY } from '../../types/interfaces';

export default class Line {
  point1: XY;
  point2: XY;
  constructor(point1: XY, point2: XY) {
    this.point1 = point1;
    this.point2 = point2;
  }

  updatePos(shift: number) {
    this.point1.y += shift;
  }
}
