import { Center } from '../../types/interfaces';
import { Edges, XY } from '../../types/types';
import Entity from '../classes/Entity';
import Shootable from '../classes/Shootable';
import { distToSegment } from './mathStuff';

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

export function checkIfWithinBounds(edge: XY, bounds: XY) {
  return edge.x > 0 && edge.x < bounds.x && edge.y > 0 && edge.y < bounds.y;
}

export function checkCollisionBtwnCircleAndRect(
  circle: Shootable,
  rectCorners: XY[],
  rectVertices: XY[][]
) {
  const centerOfCircle = circle.getCenter();

  return (
    pointInRectangle(centerOfCircle, rectCorners) ||
    intersectCircle(centerOfCircle, circle.width / 2, rectVertices)
  );
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
