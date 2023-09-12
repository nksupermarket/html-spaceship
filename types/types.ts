import { Canvas } from "../src/classes/Canvas";
import { BoundaryList } from "../src/classes/lists/BoundaryList";
import { ShootableList } from "../src/classes/lists/ShootableList";

export type ActiveState = {
  canvas: Canvas;
  boundaries: BoundaryList;
  shootables: ShootableList;
  worker: Worker;
  active: true;
  rootEl: HTMLElement;
};

export type Deactive<T> = {
  [K in keyof T]: K extends "active" ? false : null;
};

export type Direction = "left" | "right" | "up" | "down";

export type Axis = "x" | "y";

export type Mouse = Record<Axis, null | number>;

export type Bound<T> = { top: T; left: T; right: T; bottom: T };

export type NonFunctionPropertyNames<T> = {
  [K in keyof T]: T[K] extends Function ? never : K;
}[keyof T];

export type Dimensions = { width: number; height: number };

export type Option<T> = T | null;
