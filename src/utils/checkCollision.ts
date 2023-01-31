import { XY } from '../../types/interfaces';
import Bullet from '../classes/Bullet';
import Entity from '../classes/Entity';
import Shootable from '../classes/Shootable';
import Vector from '../classes/Vector';
import { distBtwnTwoPoints, getClosestPoint, sqr } from './math';

export function checkIfInsideRect(rectOne: Entity, rectTwo: Entity) {
  const insideY =
    rectTwo.y <= rectOne.y + rectOne.height &&
    rectTwo.y + rectTwo.height > rectOne.y;

  const insideX =
    rectOne.x <= rectTwo.x + rectTwo.width &&
    rectTwo.x <= rectOne.x + rectOne.width;

  return insideX && insideY;
}

export function getCollisionBetweenRectAndCircle(
  centerOfCircle: XY,
  r: number,
  rectVertices: XY[]
) {
  const closestVertex = getClosestPoint(centerOfCircle, rectVertices);
  const shortestDist = distBtwnTwoPoints(centerOfCircle, closestVertex);
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
    normal: new Vector(xDiff, yDiff),
    correction: {
      x: pointOfCollision.x - closestVertex.x,
      y: pointOfCollision.y - closestVertex.y,
    },
  };
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
