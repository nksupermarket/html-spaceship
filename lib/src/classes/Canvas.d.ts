import Spaceship from './Spaceship';
export default class Canvas {
    el: HTMLCanvasElement;
    constructor();
    setCorrectSize(): void;
    draw(spaceship: Spaceship): void;
    remove(): void;
}
