export type XY = {
  x: number;
  y: number;
};

export type Direction = 'left' | 'right' | 'up' | 'down';

export type Edges = Record<
  'topLeft' | 'bottomLeft' | 'topRight' | 'bottomRight',
  XY
>;

export type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];
