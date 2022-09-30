import DeltaTimer from './DeltaTimer';
import { Direction } from '../../types/types';
export default class KeyPress {
    keys: Record<Direction | 'click', {
        pressed: boolean;
        timer?: null | DeltaTimer;
    }>;
    constructor();
    setTimer(key: 'click', cb: () => void, delay: number): void;
    removeTimer(): void;
}
