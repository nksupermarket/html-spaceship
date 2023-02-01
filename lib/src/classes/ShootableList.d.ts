import Shootable from './Shootable';
export default class ShootableList {
    list: Shootable[];
    constructor();
    getList(): Shootable[];
    removeElIfDead(i: number, className: string): void;
}
