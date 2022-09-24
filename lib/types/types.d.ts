export declare type XY = {
    x: number;
    y: number;
};
export declare type Direction = 'left' | 'right' | 'up' | 'down';
export declare type Edges = Record<'topLeft' | 'bottomLeft' | 'topRight' | 'bottomRight', XY>;
export declare type Entries<T> = {
    [K in keyof T]: [K, T[K]];
}[keyof T][];
export declare type Mouse = {
    x: null | number;
    y: null | number;
};
