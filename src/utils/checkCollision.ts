import { XY } from '../../types/interfaces';
import { CircleBoundary } from '../classes/boundaries';
import Bullet from '../classes/Bullet';
import Entity from '../classes/Entity';
import Shootable from '../classes/Shootable';
import { distBtwnTwoPoints, distToSegment, sqr } from './math';

export function checkIfInsideRect(rectOne: Entity, rectTwo: Entity) {
  const insideY =
    rectTwo.y <= rectOne.y + rectOne.height &&
    rectTwo.y + rectTwo.height > rectOne.y;

  const insideX =
    rectOne.x <= rectTwo.x + rectTwo.width &&
    rectTwo.x <= rectOne.x + rectOne.width;

  return insideX && insideY;
}

export function getShipCollision(vertex: XY, rect: Entity) {
  const collideY = rect.y <= vertex.y && rect.y + rect.height > vertex.y;
  const collideX = rect.x <= vertex.x && rect.x + rect.width > vertex.x;

  if (collideY && collideX) {
    const sizeOfYPenetration = Math.min(
      vertex.y - rect.y,
      rect.y + rect.height - vertex.y
    );
    const sizeOfXPenetration = Math.min(
      vertex.x - rect.x,
      rect.x + rect.width - vertex.x
    );
    return sizeOfYPenetration > sizeOfXPenetration
      ? {
          axis: 'x',
          amount: sizeOfXPenetration,
        }
      : {
          axis: 'y',
          amount: sizeOfYPenetration,
        };
  }

  return null;
}

export function checkShipCollision(vertex: XY, rect: Entity) {
  const collideY = rect.y <= vertex.y && rect.y + rect.height > vertex.y;
  const collideX = rect.x <= vertex.x && rect.x + rect.width > vertex.x;

  return collideY && collideX;
}

export function getCollisionAxisForBounds(vertex: XY, bounds: XY) {
  if (vertex.x < 0 || vertex.x > bounds.x) return 'y';
  else if (vertex.y < 0 || vertex.y > bounds.y) return 'x';
  else return null;
}

export function checkIfWithinBounds(vertex: XY, bounds: XY) {
  return (
    vertex.x > 0 && vertex.x < bounds.x && vertex.y > 0 && vertex.y < bounds.y
  );
}

function pointInRectangle(centerOfCircle: XY, rectVertices: XY[]) {
  const { min, max } = rectVertices.reduce<{ max: XY; min: XY }>(
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

export function getCollisionBetweenRectAndCircle(
  centerOfCircle: XY,
  r: number,
  rectVertices: XY[]
) {
  let closestVertex = rectVertices[0];
  let shortestDist = distBtwnTwoPoints(closestVertex, centerOfCircle);
  for (let i = 1; i < rectVertices.length; i++) {
    const testDist = distBtwnTwoPoints(rectVertices[i], centerOfCircle);
    if (testDist < shortestDist) {
      closestVertex = rectVertices[i];
      shortestDist = testDist;
    }
  }
  if (shortestDist > r) return null;
  const theta = Math.atan2(
    closestVertex.y - centerOfCircle.y,
    closestVertex.x - centerOfCircle.x
  );
  const xDiff = r * Math.cos(theta);
  const yDiff = r * Math.sin(theta);

  const pointOfCollision = {
    x: centerOfCircle.x + xDiff,
    y: centerOfCircle.y + yDiff,
  };
  return {
    pointOfCollision,
    correction: {
      x: pointOfCollision.x - closestVertex.x,
      y: pointOfCollision.y - closestVertex.y,
    },
  };
}

export function checkCollisionBtwnCircleAndRect(
  circle: Shootable | CircleBoundary,
  rectVertices: XY[],
  rectEdges: XY[][]
) {
  const centerOfCircle = circle.getCenter();

  return (
    pointInRectangle(centerOfCircle, rectVertices) ||
    intersectCircle(centerOfCircle, circle.width / 2, rectEdges)
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
