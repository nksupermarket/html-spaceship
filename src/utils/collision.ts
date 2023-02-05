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

function getNormals(vertices: XY[]) {
  let normals = [];

  // Loop through each edge
  for (let i = 0; i < vertices.length; i++) {
    const vector = Vector.fromPoints(
      vertices[i],
      vertices[(i + 1) % vertices.length]
    ).toRightNormal();
    vector.normalize();
    normals.push(vector);
  }
  return normals;
}

function projectOntoNormal(vertices: XY[], normal: Vector) {
  let min = Infinity;
  let max = -Infinity;
  for (let i = 0; i < vertices.length; i++) {
    const dp = normal.getDotProduct(vertices[i]);
    min = Math.min(dp, min);
    max = Math.max(dp, max);
  }

  return { min, max };
}

interface MockPolygon {
  vertices: XY[];
  center: XY;
}

export function checkCollisionBtwnPolygons(p1: MockPolygon, p2: MockPolygon) {
  let overlap = Infinity;
  let collisionNormal;

  const p1Normals = getNormals(p1.vertices);
  const p2Normals = getNormals(p2.vertices);
  const allNormals = p1Normals.concat(p2Normals);

  for (const normal of allNormals) {
    const p1_1d = projectOntoNormal(p1.vertices, normal);
    const p2_1d = projectOntoNormal(p2.vertices, normal);

    const prevOverlap = overlap;
    overlap = Math.min(
      Math.min(p1_1d.max, p2_1d.max) - Math.max(p1_1d.min, p2_1d.min),
      overlap
    );
    if (overlap != prevOverlap) collisionNormal = normal;

    if (!(p2_1d.max > p1_1d.min && p1_1d.max > p2_1d.min)) return null;
  }

  const displacementVector = Vector.fromPoints(p2.center, p1.center);
  const magnitude = displacementVector.getMagnitude();
  const displacement = {
    x: (overlap * displacementVector.x) / magnitude,
    y: (overlap * displacementVector.y) / magnitude,
  };
  return { displacement, collisionNormal };
}
