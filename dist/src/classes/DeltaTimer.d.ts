/// <reference types="node" />
export default class DeltaTimer {
    timeout: NodeJS.Timeout | null;
    lastTime: number;
    onTimerEnd: () => void;
    interval: number;
    constructor(onTimerEnd: () => void, interval: number);
    loop(): void;
    start(): void;
    stop(): void;
}
