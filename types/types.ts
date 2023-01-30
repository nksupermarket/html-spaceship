export type XY = {
  x: number;
  y: number;
};

export type Direction = 'left' | 'right' | 'up' | 'down';

export type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

export type Mouse = {
  x: null | number;
  y: null | number;
};

export type Bound<T> = { top: T; left: T; right: T; bottom: T };
