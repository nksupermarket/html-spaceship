import { Entity } from '../../types/interfaces';
import { XY } from '../../types/types';

export default {
  left: (entity: Entity) => {
    entity.velocity.x -= entity.speed;
  },
  right: (entity: Entity) => {
    entity.velocity.x += entity.speed;
  },
  up: (entity: Entity) => {
    entity.velocity.y -= entity.speed;
  },
  down: (entity: Entity) => {
    entity.velocity.y += entity.speed;
  },
};

export function updatePosition(entity: Entity) {
  entity.x += entity.velocity.x;
  entity.y += entity.velocity.y;
}

export function applyInertia(entity: Entity) {
  const { velocity } = entity;
  let key: keyof XY;
  for (key in velocity) {
    if (!velocity[key]) return;
    velocity[key] /= 1.4;
  }
}
