import { XY } from '../../types/interfaces';

export function sqr(x: number) {
  return x * x;
}

export function distBtwnTwoPoints(v: XY, w: XY) {
  return Math.sqrt(sqr(v.x - w.x) + sqr(v.y - w.y));
}

export function getClosestPoint(p1: XY, points: XY[]) {
  let closestPoint = points[0];
  let shortestDist = distBtwnTwoPoints(closestPoint, p1);
  for (let i = 1; i < points.length; i++) {
    const testDist = distBtwnTwoPoints(points[i], p1);
    if (testDist < shortestDist) {
      closestPoint = points[i];
      shortestDist = testDist;
    }
  }
  return closestPoint;
}
