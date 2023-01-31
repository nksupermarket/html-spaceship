export declare type Direction = 'left' | 'right' | 'up' | 'down';
export declare type Entries<T> = {
    [K in keyof T]: [K, T[K]];
}[keyof T][];
export declare type Mouse = {
    x: null | number;
    y: null | number;
};
export declare type Bound<T> = {
    top: T;
    left: T;
    right: T;
    bottom: T;
};
export declare type WrapWordsConfig = {
    active: false;
    class: undefined;
} | {
    active: true;
    class: string;
};
