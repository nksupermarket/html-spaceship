import { BaseEntity, SpaceshipInterface } from '../types/interfaces';

export default function Spaceship(
  { x, y, width, height }: BaseEntity,
  speed: number
): SpaceshipInterface {
  return {
    y,
    x,
    height,
    width,
    speed,
    angle: (90 * Math.PI) / 180,
    velocity: { x: 0, y: 0 },
    getCenter: function (this: SpaceshipInterface) {
      const xCenter = this.x + this.width / 2;
      const yCenter = this.y + this.height / 2;

      return { xCenter, yCenter };
    },
  };
}
