import { XY } from '../../types/interfaces';

export default class Vector {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  static fromPoints(point1: XY, point2: XY) {
    return new Vector(point2.x - point1.x, point2.y - point1.y);
  }

  static fromVector(vector: Vector) {
    return new Vector(vector.x, vector.y);
  }

  getCrossProduct(vector: Vector) {
    return this.x * vector.y - this.y * vector.x;
  }

  toLeftNormal() {
    var x = this.x;

    this.x = this.y;
    this.y = -x;
  }

  toRightNormal() {
    var x = this.x;

    this.x = -this.y;
    this.y = x;
  }
}
