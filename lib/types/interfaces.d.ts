import { WrapWordsConfig } from './types';
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
export interface Center {
    xCenter: number;
    yCenter: number;
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
    wrapWords?: WrapWordsConfig;
}
