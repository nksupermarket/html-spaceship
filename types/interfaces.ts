import { XY } from './types';

export interface BaseEntity extends XY {
  height: number;
  width: number;
}

export interface Entity extends BaseEntity {
  velocity: XY;
  speed: number;
}

export interface SpaceshipInterface extends Entity {
  angle: number;
  getCenter: () => { xCenter: number; yCenter: number };
}
