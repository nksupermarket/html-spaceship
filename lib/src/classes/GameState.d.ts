import { Mouse } from "../../types/types";
import KeyPress from "./KeyPress";
import Score from "./Score";
import Spaceship from "./entities/Spaceship";
import BoundaryList from "./lists/BoundaryList";
import ShootableList from "./lists/ShootableList";
export default class GameState {
    spaceship: Spaceship;
    boundaries: BoundaryList;
    shootables: ShootableList;
    mouse: Mouse;
    keyPress: KeyPress;
    scrollBoundary: {
        top: number;
        bottom: number;
    };
    readonly REMOVE_CLASS: string;
    readonly ROOT_EL: HTMLElement;
    score: Score;
    constructor(removeClass: string, theme: "light" | "dark", speed: number, rootEl: HTMLElement);
    update(): void;
}
