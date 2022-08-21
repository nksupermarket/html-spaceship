import { Edges, XY } from '../../types/types';
import Entity from '../classes/Entity';

export function checkIfInsideDiameter(rectOne: Entity, rectTwo: Entity) {
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
