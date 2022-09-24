import { XY } from '../../types/types';
export default class Entity {
  height: number;
  width: number;
  x: number;
  y: number;
  velocity: XY;
  constructor(x: number, y: number, height: number, width: number);
}
