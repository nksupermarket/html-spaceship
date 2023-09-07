export type Direction = "left" | "right" | "up" | "down";

export type Axis = "x" | "y";

export type Mouse = Record<Axis, null | number>;

export type Bound<T> = { top: T; left: T; right: T; bottom: T };

export type NonFunctionPropertyNames<T> = {
  [K in keyof T]: T[K] extends Function ? never : K;
}[keyof T];

export type Dimensions = { width: number; height: number };
