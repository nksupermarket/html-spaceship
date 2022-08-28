import { Edges, XY } from '../../types/types';
import Entity from '../classes/Entity';

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
  circle: Entity,
  rectEdges: XY[],
  rectVertices: XY[][]
) {}

function pointInRectangle(point: XY, rectEdges: XY[]) {
  const { min, max } = rectEdges.reduce<{ max: XY; min: XY }>(
    (acc, curr) => {
      if (curr.x > max.x) max.x = curr.x;
      if (curr.x < min.x) min.x = curr.x;

      if (curr.y > max.y) max.y = curr.y;
      if (curr.y < min.y) min.y = curr.y;

      return acc;
    },
    {
      max: {
        x: 0,
        y: 0,
      },
      min: {
        x: 0,
        y: 0,
      },
    }
  );

  if (point.x < min.x || point.x > max.x || point.y < min.y || point.y > max.y)
    return false;
}

function intersectCircle(centerOfCircle: XY, r: number, vertices: XY[][]) {
  return vertices.reduce((acc, curr) => {
    const [{ x: x1, y: y1 }, { x: x2, y: y2 }] = curr;

    if (
      Math.abs(
        (x2 - x1) * (y1 - centerOfCircle.y) -
          (x1 - centerOfCircle.x) * (y2 - y1)
      ) /
        Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)) <
      r
    )
      return true;
    return false;
  }, false);
}
