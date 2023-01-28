import { Center } from '../../types/interfaces';
import { Edges, XY } from '../../types/types';
import Boundary from '../classes/Boundary';
import Bullet from '../classes/Bullet';
import Entity from '../classes/Entity';
import Shootable from '../classes/Shootable';
import { distToSegment, sqr } from './math';

export function checkIfInsideRect(rectOne: Entity, rectTwo: Entity) {
  const insideY =
    rectTwo.y <= rectOne.y + rectOne.height &&
    rectTwo.y + rectTwo.height > rectOne.y;

  const insideX =
    rectOne.x <= rectTwo.x + rectTwo.width &&
    rectTwo.x <= rectOne.x + rectOne.width;

  return insideX && insideY;
}

export function checkShipEdgeCollision(edge: XY, rect: Entity) {
  const collideY = rect.y <= edge.y && rect.y + rect.height > edge.y;
  const collideX = rect.x <= edge.x && rect.x + rect.width > edge.x;

  return collideY && collideX;
}

export function getCollisionAxisForBounds(edge: XY, bounds: XY) {
  if (edge.x < 0 || edge.x > bounds.x) return 'y';
  else if (edge.y < 0 || edge.y > bounds.y) return 'x';
  else return null;
}

export function checkIfWithinBounds(edge: XY, bounds: XY) {
  return edge.x > 0 && edge.x < bounds.x && edge.y > 0 && edge.y < bounds.y;
}

function pointInRectangle(centerOfCircle: XY, rectCorners: XY[]) {
  const { min, max } = rectCorners.reduce<{ max: XY; min: XY }>(
    (acc, curr) => {
      const { min, max } = acc;

      if (!max || curr.x > max.x) max.x = curr.x;
      if (!min || curr.x < min.x) min.x = curr.x;

      if (!max || curr.y > max.y) max.y = curr.y;
      if (!min || curr.y < min.y) min.y = curr.y;

      return acc;
    },
    { max: {}, min: {} } as { max: XY; min: XY }
  );

  return (
    centerOfCircle.x > min.x &&
    centerOfCircle.x < max.x &&
    centerOfCircle.y > min.y &&
    centerOfCircle.y < max.y
  );
}

function intersectCircle(centerOfCircle: XY, r: number, rectVertices: XY[][]) {
  for (const v of rectVertices) {
    const [p1, p2] = v;

    if (
      // distance between centerOfCenter and line is less than radius
      distToSegment(centerOfCircle, p1, p2) < r
    )
      return true;
  }

  return false;
}

export function checkCollisionBtwnCircleAndRect(
  circle: Shootable | Boundary,
  rectCorners: XY[],
  rectVertices: XY[][]
) {
  const centerOfCircle = circle.getCenter();

  return (
    pointInRectangle(centerOfCircle, rectCorners) ||
    intersectCircle(centerOfCircle, circle.width / 2, rectVertices)
  );
}

export function checkCollisionBtwnCircles(
  c1: Shootable | Bullet,
  c2: Shootable | Bullet
) {
  // get distance between centers of circles
  const { x: x1, y: y1 } = c1.getCenter();
  const { x: x2, y: y2 } = c2.getCenter();
  const distance = Math.sqrt(sqr(x2 - x1) + sqr(y2 - y1));

  return distance <= c1.width / 2 + c2.width / 2;
}
