import Entity from "../classes/entities/Entity";

export function closeEnoughForCollision(
  e1: Entity,
  e2: Entity,
  bufferZone: number
) {
  return !(
    (e1.x + e1.width + bufferZone < e2.x ||
      e1.x > e2.x + e2.width + bufferZone) &&
    (e1.y + e1.height + bufferZone < e2.y ||
      e1.y > e2.y + e2.height + bufferZone)
  );
}
