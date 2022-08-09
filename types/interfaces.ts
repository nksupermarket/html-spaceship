import { XY } from './types';

export interface BaseEntity extends XY {
  height: number;
  width: number;
}

export interface Entity extends BaseEntity {
  velocity: XY;
  speed: number;
}

export interface MouseInterface {
  x: number | null;
  y: number | null;
}

export interface Center {
  xCenter: number;
  yCenter: number;
}
