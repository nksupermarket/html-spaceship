/// <reference types="@types/offscreencanvas" />
import { Dimensions } from "../../types/types";
import { Spaceship } from "./entities/Spaceship";
export declare class Canvas {
    el: HTMLCanvasElement;
    scoreColor: string;
    constructor(scoreColor?: string);
    setCorrectSize(): void;
    draw(spaceship: Spaceship, score: number): void;
    remove(): void;
}
export declare class CanvasOffScreen {
    offscreen: OffscreenCanvas;
    scoreColor: string;
    constructor(offscreen: OffscreenCanvas, scoreColor?: string);
    draw(windowDimensions: Dimensions, spaceship: Spaceship, score: number): void;
    updateSize(dimensions: Dimensions): void;
}
