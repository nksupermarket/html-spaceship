import { XY } from "../../types/interfaces";
import Entity from "../classes/entities/Entity";

export function getCenter(e: Entity): XY {
  return { x: e.x + e.width / 2, y: e.y + e.height / 2 };
}
