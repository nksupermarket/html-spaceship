import { Canvas } from "../src/classes/Canvas";
import { BoundaryList } from "../src/classes/lists/BoundaryList";
import { ShootableList } from "../src/classes/lists/ShootableList";
export declare type ActiveState = {
    canvas: Canvas;
    boundaries: BoundaryList;
    shootables: ShootableList;
    worker: Worker;
    active: true;
    rootEl: HTMLElement;
};
export declare type Deactive<T> = {
    [K in keyof T]: K extends "active" ? false : null;
};
export declare type Direction = "left" | "right" | "up" | "down";
export declare type Axis = "x" | "y";
export declare type Mouse = Record<Axis, null | number>;
export declare type Bound<T> = {
    top: T;
    left: T;
    right: T;
    bottom: T;
};
export declare type NonFunctionPropertyNames<T> = {
    [K in keyof T]: T[K] extends Function ? never : K;
}[keyof T];
export declare type Dimensions = {
    width: number;
    height: number;
};
export declare type Option<T> = T | null;
