import Spaceship from './Spaceship';
export default class Canvas {
    el: HTMLCanvasElement;
    scoreColor: string;
    constructor(scoreColor?: string);
    setCorrectSize(): void;
    draw(spaceship: Spaceship, score: number): void;
    remove(): void;
}
