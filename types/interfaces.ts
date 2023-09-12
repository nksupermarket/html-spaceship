export interface XY {
  x: number;
  y: number;
}

export interface MouseInterface {
  x: number | null;
  y: number | null;
}

export interface KeysConfig {
  left: KeyboardEvent["key"];
  right: KeyboardEvent["key"];
  up: KeyboardEvent["key"];
  down: KeyboardEvent["key"];
  deactivate: KeyboardEvent["key"];
}

export interface Config {
  workerDir: string;
  keys?: KeysConfig;
  wrapWordsClass?: string;
  theme?: "dark" | "light";
  removedClass: string;
  onRemove?: () => void;
  speed?: number;
  rootEl?: HTMLElement;
}

export interface List<T, K> {
  list: T[];
  getList: () => T[];
  convertToBare: () => K[];
}
