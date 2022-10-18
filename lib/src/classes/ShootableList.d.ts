import Shootable from './Shootable';
export default class ShootableList {
    list: Shootable[];
    constructor();
    getList(): Shootable[];
    updatePositions(): void;
    removeDeadEls(): void;
}
