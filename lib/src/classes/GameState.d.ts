import Spaceship from './Spaceship';
import { Mouse } from '../../types/types';
import KeyPress from './KeyPress';
import BoundaryList from './BoundaryList';
import ShootableList from './ShootableList';
import { XY } from '../../types/interfaces';
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
    scrollSpeed: number;
    constructor(startPos?: XY);
    update(): void;
}
