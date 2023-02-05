import { XY } from '../../types/interfaces';
import { RectBoundary } from '../classes/boundaries';
import Bullet from '../classes/Bullet';
import Entity from '../classes/Entity';
import Polygon from '../classes/Polygon';
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

export function checkCollisionBtwnPolygons(
  p1: Polygon | RectBoundary,
  p2: RectBoundary | Polygon
) {
  let overlap = Infinity;

  for (let shape = 0; shape < 2; shape++) {
    if (shape === 1) {
      const tmp = p1;
      p1 = p2;
      p2 = tmp;
    }
    for (let i = 0; i < p1.vertices.length; i++) {
      const normal = Vector.fromPoints(
        p1.vertices[i],
        p1.vertices[(i + 1) % p1.vertices.length]
      ).toRightNormal();
      normal.normalize();

      let minP1 = Infinity;
      let maxP1 = -Infinity;
      for (let j = 0; j < p1.vertices.length; j++) {
        const dp = normal.getDotProduct(p1.vertices[j]);
        minP1 = Math.min(dp, minP1);
        maxP1 = Math.max(dp, maxP1);
      }

      let minP2 = Infinity;
      let maxP2 = -Infinity;
      for (let k = 0; k < p2.vertices.length; k++) {
        const dp = normal.getDotProduct(p2.vertices[k]);
        minP2 = Math.min(dp, minP2);
        maxP2 = Math.max(dp, maxP2);
      }

      overlap = Math.min(
        Math.min(maxP1, maxP2) - Math.max(minP1, minP2),
        overlap
      );

      if (!(maxP2 >= minP1 && maxP1 >= minP2)) return null;
    }
  }

  const displacementVector = Vector.fromPoints(p2.center, p1.center);
  const magnitude = displacementVector.getMagnitude();
  const displacement = {
    x: (overlap * displacementVector.x) / magnitude,
    y: (overlap * displacementVector.y) / magnitude,
  };
  return displacement;
}
