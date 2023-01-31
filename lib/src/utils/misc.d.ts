import { XY } from '../../types/interfaces';
export declare function getTranslateY(el: HTMLElement): number;
export declare function createImage(src: string): HTMLImageElement;
export declare function getExtremities(vertices: XY[]): {
    top: number;
    left: number;
    right: number;
    bottom: number;
};
