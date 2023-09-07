import { BoundaryList } from "../src/classes/BoundaryList";
import Canvas from "../src/classes/Canvas";
import KeyPress from "../src/classes/KeyPress";
import ShootableList from "../src/classes/ShootableList";
import { SpaceShipEventState } from "../src/classes/Spaceship";
import { Mouse } from "./types";

export interface ActiveState {
  canvas: Canvas;
  mouse: Mouse;
  boundaries: BoundaryList;
  shootables: ShootableList;
  keyPress: KeyPress;
  worker: Worker;
  active: true;
  spaceShipState: SpaceShipEventState;
}

export interface DeactiveState {
  canvas: null;
  mouse: null;
  boundaries: null;
  shootables: null;
  keyPress: null;
  worker: null;
  active: false;
  spaceShipState: null;
}

export interface XY {
  x: number;
  y: number;
}
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

export interface KeysConfig {
  left: KeyboardEvent["key"];
  right: KeyboardEvent["key"];
  up: KeyboardEvent["key"];
  down: KeyboardEvent["key"];
  deactivate: KeyboardEvent["key"];
}

export interface Config {
  keys?: KeysConfig;
  wrapWordsClass?: string;
  theme?: "dark" | "light";
  removedClass: string;
  onRemove?: () => void;
  speed?: number;
  rootEl?: HTMLElement;
}
