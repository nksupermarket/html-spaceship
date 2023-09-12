import Spaceship from "./entities/Spaceship";
export default class Canvas {
    el: HTMLCanvasElement;
    private ctx;
    scoreColor: string;
    constructor(scoreColor?: string);
    setCorrectSize(): void;
    draw(spaceship: Spaceship, score: number): void;
    remove(): void;
}
