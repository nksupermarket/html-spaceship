import { XY } from "../../types/interfaces";
import { Option, Mouse } from "../../types/types";
import { BareCircleBoundary, BareRectBoundary } from "./entities/boundaries";
import { BareShootable } from "./entities/Shootable";
import { Spaceship } from "./entities/Spaceship";
import KeyPress from "./KeyPress";
import { BoundaryList } from "./lists/BoundaryList";
import { ShootableList } from "./lists/ShootableList";
import Score from "./Score";
export default class GameState {
    spaceship: Spaceship;
    boundaries: BoundaryList;
    shootables: ShootableList;
    mouse: Mouse;
    keyPress: KeyPress;
    bounds: XY;
    scrollBoundary: {
        top: number;
        bottom: number;
    };
    readonly REMOVE_CLASS: string;
    readonly ROOT_EL: HTMLElement;
    score: Score;
    constructor(removeClass: string, image: ImageBitmap, speed: number, rootEl: HTMLElement);
    updateBounds(dimensions: XY): void;
    update(): void;
}
export declare class WebWorkerGameState {
    spaceship: Spaceship;
    score: Score;
    mouse: Mouse;
    keyPress: KeyPress;
    bounds: XY;
    constructor(spaceShipConfig: {
        image: ImageBitmap;
        speed: number;
        startPos: XY;
    }, bounds: XY);
    updateBounds(dimensions: XY): void;
    update(scrollY: number, rootElTranslateYValue: number, distanceFromTopViewportToBottomOfDoc: number, boundaries: (BareCircleBoundary | BareRectBoundary)[], shootables: BareShootable[]): {
        shootablesHitAxis: any[];
        newRootElTranslateValue: Option<number>;
    };
}
