export interface XY {
    x: number;
    y: number;
}
export interface BaseEntity extends XY {
    height: number;
    width: number;
}
export interface Entity extends BaseEntity {
    velocity: XY;
    speed: number;
}
export interface MouseInterface {
    x: number | null;
    y: number | null;
}
export interface KeysConfig {
    left: KeyboardEvent['key'];
    right: KeyboardEvent['key'];
    up: KeyboardEvent['key'];
    down: KeyboardEvent['key'];
    deactivate: KeyboardEvent['key'];
}
export interface Config {
    keys?: KeysConfig;
    wrapWordsClass?: string;
    theme?: 'dark' | 'light';
    removedClass: string;
    onRemove?: () => void;
    speed?: number;
    rootEl?: HTMLElement;
}
