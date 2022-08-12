import { XY } from '../../types/types';
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

export function checkIfWithinBounds(edge: XY, bounds: XY) {
  return edge.x > 0 && edge.x < bounds.x && edge.y > 0 && edge.y < bounds.y;
}
