export declare type Direction = 'left' | 'right' | 'up' | 'down';
export declare type Axis = 'x' | 'y';
export declare type Mouse = Record<Axis, null | number>;
export declare type Bound<T> = {
    top: T;
    left: T;
    right: T;
    bottom: T;
};
