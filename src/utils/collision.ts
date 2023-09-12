import { XY } from "../../types/interfaces";
import Bullet from "../classes/entities/Bullet";
import Entity from "../classes/entities/Entity";
import Shootable from "../classes/entities/Shootable";
import { CircleBoundary } from "../classes/entities/boundaries";
import Vector from "../classes/geometric_objects/Vector";
import { getClosestPoint, sqr } from "./math";

export function checkIfInsideRect(rectOne: Entity, rectTwo: Entity) {
  const insideY =
    rectTwo.y <= rectOne.y + rectOne.height &&
    rectTwo.y + rectTwo.height > rectOne.y;

  const insideX =
    rectOne.x <= rectTwo.x + rectTwo.width &&
    rectTwo.x <= rectOne.x + rectOne.width;

  return insideX && insideY;
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
    normals.push(vector);
  }
  return normals;
}

function projectPolygon(vertices: XY[], vector: Vector) {
  const v = Vector.fromVector(vector).normalize();
  let min = Infinity;
  let max = -Infinity;
  for (let i = 0; i < vertices.length; i++) {
    const dot = v.dot(vertices[i]);
    min = Math.min(dot, min);
    max = Math.max(dot, max);
  }

  return { min, max };
}

interface MockPolygon {
  vertices: XY[];
  center: XY;
}

export function getCollisionBtwnPolygons(p: MockPolygon, p2: MockPolygon) {
  let overlap = Infinity;
  let collisionNormal = new Vector(0, 0);

  const pNormals = getNormals(p.vertices);
  const p2Normals = getNormals(p2.vertices);
  const allNormals = p2Normals.concat(pNormals);

  for (const normal of allNormals) {
    const pProj = projectPolygon(p.vertices, normal);
    const p2Proj = projectPolygon(p2.vertices, normal);

    const prevOverlap = overlap;
    overlap = Math.min(
      Math.min(pProj.max, p2Proj.max) - Math.max(pProj.min, p2Proj.min),
      overlap
    );
    if (overlap != prevOverlap) collisionNormal = normal;

    if (p2Proj.max < pProj.min || pProj.max < p2Proj.min) return null;
  }

  const displacementVector = Vector.fromPoints(p.center, p2.center);
  displacementVector.normalize();
  return {
    displacement: displacementVector.multiply(overlap),
    collisionNormal,
  };
}

type MockCircle = {
  radius: number;
  center: XY;
};

function projectCircle(c: MockCircle, vector: Vector) {
  const direction = Vector.fromVector(vector).normalize();
  direction.multiply(c.radius);

  const p1 = {
    x: c.center.x + direction.x,
    y: c.center.y + direction.y,
  };
  const p2 = {
    x: c.center.x - direction.x,
    y: c.center.y - direction.y,
  };
  direction.normalize();
  let min = direction.dot(p1);
  let max = direction.dot(p2);
  if (min > max) {
    const tmp = min;
    min = max;
    max = tmp;
  }
  return { min, max };
}

export function getCollisionBtwnPolygonAndCircle(
  p: MockPolygon,
  c: CircleBoundary
) {
  let overlap = Infinity;
  let collisionNormal = new Vector(0, 0);

  const pNormals = getNormals(p.vertices);
  for (const normal of pNormals) {
    const pProj = projectPolygon(p.vertices, normal);
    const cProj = projectCircle(c, normal);

    if (cProj.max < pProj.min || pProj.max < cProj.min) return null;

    const prevOverlap = overlap;
    overlap = Math.min(
      Math.min(pProj.max, cProj.max) - Math.max(pProj.min, cProj.min),
      overlap
    );
    if (overlap != prevOverlap) collisionNormal = normal;
  }

  // see if closest point on polygon intersects circle
  const closestPoint = getClosestPoint(c.center, p.vertices);
  const axis = Vector.fromPoints(c.center, closestPoint);
  const pProj = projectPolygon(p.vertices, axis);
  const cProj = projectCircle(c, axis);
  if (cProj.max < pProj.min || pProj.max < cProj.min) return null;

  const prevOverlap = overlap;
  overlap = Math.min(
    Math.min(pProj.max, cProj.max) - Math.max(pProj.min, cProj.min),
    overlap
  );
  if (overlap != prevOverlap) collisionNormal = axis;

  const displacementVector = Vector.fromPoints(c.center, p.center);
  displacementVector.normalize();
  return {
    displacement: displacementVector.multiply(overlap),
    collisionNormal,
  };
}
