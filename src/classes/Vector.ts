import { XY } from '../../types/interfaces';
import { sqr } from '../utils/math';

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

  getDotProduct(v2: XY) {
    return v2.x * this.x + v2.y * this.y;
  }

  getCrossProduct(vector: Vector) {
    return this.x * vector.y - this.y * vector.x;
  }

  toLeftNormal() {
    var x = this.x;

    this.x = this.y;
    this.y = -x;
    return this;
  }

  toRightNormal() {
    var x = this.x;

    this.x = -this.y;
    this.y = x;
    return this;
  }

  getMagnitude() {
    return Math.sqrt(sqr(this.x) + sqr(this.y));
  }

  normalize() {
    const magnitude = this.getMagnitude();
    this.x /= magnitude;
    this.y /= magnitude;
    console.log(this.x, this.y);
    return this;
  }

  multiply(scalar: number) {
    this.x *= scalar;
    this.y *= scalar;
    return this;
  }
}
