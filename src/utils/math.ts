import { XY } from '../../types/types';

export function sqr(x: number) {
  return x * x;
}
function dist2(v: XY, w: XY) {
  return sqr(v.x - w.x) + sqr(v.y - w.y);
}
function distToSegmentSquared(p: XY, v: XY, w: XY) {
  var l2 = dist2(v, w);
  if (l2 == 0) return dist2(p, v);
  var t = ((p.x - v.x) * (w.x - v.x) + (p.y - v.y) * (w.y - v.y)) / l2;
  t = Math.max(0, Math.min(1, t));
  return dist2(p, { x: v.x + t * (w.x - v.x), y: v.y + t * (w.y - v.y) });
}
export function distToSegment(p: XY, v: XY, w: XY) {
  return Math.sqrt(distToSegmentSquared(p, v, w));
}
