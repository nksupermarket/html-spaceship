import { Mouse } from '../../types/types';
import BoundaryList from './BoundaryList';
import KeyPress from './KeyPress';
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
    constructor(removeClass: string, theme: 'light' | 'dark');
    update(): void;
}
