import { XY } from '../../types/interfaces';

export default class Polygon {
  vertices: XY[];
  private _oldTheta: number;
  constructor(vertices: XY[]) {
    this.vertices = vertices;
    this._oldTheta = 0;
  }

  rotate(theta: number, origin: XY) {
    this.vertices = this.vertices.map((p) => ({
      x:
        (p.x - origin.x) * Math.cos(theta - this._oldTheta) -
        (p.y - origin.y) * Math.sin(theta - this._oldTheta) +
        origin.x,
      y:
        (p.x - origin.x) * Math.sin(theta - this._oldTheta) +
        (p.y - origin.y) * Math.cos(theta - this._oldTheta) +
        origin.y,
    }));
    this._oldTheta = theta;
  }

  updateXPosition(shift: number) {
    for (let i = 0; i < this.vertices.length; i++) {
      this.vertices[i].x += shift;
    }
  }

  updateYPosition(shift: number) {
    for (let i = 0; i < this.vertices.length; i++) {
      this.vertices[i].y += shift;
    }
  }
}
