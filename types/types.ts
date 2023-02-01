export type Direction = 'left' | 'right' | 'up' | 'down';

export type Axis = 'x' | 'y';

export type Mouse = Record<Axis, null | number>;

export type Bound<T> = { top: T; left: T; right: T; bottom: T };

export type WrapWordsConfig =
  | {
      active: false;
      class: undefined;
    }
  | {
      active: true;
      class: string;
    };
