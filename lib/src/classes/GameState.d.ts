import { Mouse } from '../../types/types';
import BoundaryList from './BoundaryList';
import KeyPress from './KeyPress';
import Score from './Score';
import ShootableList from './ShootableList';
import Spaceship from './Spaceship';
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
    constructor(removeClass: string, theme: 'light' | 'dark', speed: number, rootEl: HTMLElement);
    update(): void;
}
