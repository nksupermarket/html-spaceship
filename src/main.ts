import {
  ActiveState,
  Config,
  DeactiveState,
  KeysConfig,
} from "../types/interfaces";
import { Canvas } from "./classes/Canvas";
import GameState from "./classes/GameState";
import "./style.css";
import { getTranslateY } from "./utils/misc";
import wrapWords from "./wrapWords";

const state: DeactiveState | ActiveState = {
  canvas: null,
  mouse: null,
  keyPress: null,
  boundaries: null,
  shootables: null,
  worker: null,
  active: false,
  spaceshipState: null,
};

function animate() {
  if (!state.active) return;
  state.worker.postMessage({
    spaceshipState: state.spaceshipState,
    mouse: state.mouse,
    keyPress: state.keyPress,
    boundaries: state.boundaries.list.map((b) => {
      let { el, ...rest } = b;
      return rest;
    }),
    shootables: state.shootables.list.map((s) => {
      let { el, ...rest } = s;
      return rest;
    }),
  });
  // state.canvas.draw(state.gameState.spaceship, state.gameState.score.display);
  requestAnimationFrame(animate);
}

const toggleKeyPress =
  (keysConfig: KeysConfig, state: DeactiveState | ActiveState) =>
  (key: string, keyIsPressed: boolean) => {
    if (!state.active) return;

    switch (key) {
      case keysConfig.left: {
        state.keyPress.keys.left.pressed = keyIsPressed;
        state.spaceshipState.accelerating = keyIsPressed;
        break;
      }
      case keysConfig.right: {
        state.keyPress.keys.right.pressed = keyIsPressed;
        state.spaceshipState.accelerating = keyIsPressed;
        break;
      }
      case keysConfig.up: {
        state.keyPress.keys.up.pressed = keyIsPressed;
        state.spaceshipState.accelerating = keyIsPressed;
        break;
      }
      case keysConfig.down: {
        state.keyPress.keys.down.pressed = keyIsPressed;
        state.spaceshipState.accelerating = keyIsPressed;
        break;
      }
    }
  };

function getEventHandlers(keysConfig: KeysConfig) {
  if (!state.active) return;
  const onKeyPress = toggleKeyPress(keysConfig, state);
  return {
    resizeCanvas: () => {
      state.shootables.list = state.shootables.getList();
      state.boundaries.list = state.boundaries.getList();
      state.canvas.setCorrectSize();
    },

    changeAimPos: (e: MouseEvent) => {
      state.mouse.x = e.clientX;
      state.mouse.y = e.clientY;
    },

    shoot: (e: MouseEvent) => {
      e.preventDefault();
      state.keyPress.keys.click.pressed = true;
      if (!state.keyPress.keys.click.timer)
        state.keyPress.setTimer(
          "click",
          () => (state.spaceshipState.shotAvailable = true),
          250
        );
    },

    resetShoot: (e: MouseEvent) => {
      e.preventDefault();
      state.spaceshipState.shotAvailable = true;
      state.keyPress.keys.click.pressed = false;
      if (state.keyPress.keys.click.timer) state.keyPress.removeTimer();
    },

    handleKeyPress: (e: KeyboardEvent) => {
      onKeyPress(e.key, true);
    },

    handleKeyUp: (e: KeyboardEvent) => {
      onKeyPress(e.key, false);
    },
  };
}

let keysConfigHandler = {
  get: function (target: KeysConfig, name: string) {
    switch (name) {
      case "left": {
        return target[name] || "a";
      }
      case "right": {
        return target[name] || "d";
      }
      case "up": {
        return target[name] || "w";
      }
      case "down": {
        return target[name] || "s";
      }
      case "deactivate": {
        return target[name] || " ";
      }
    }
  },
};

let configHandler = {
  get: function (target: Config, name: keyof Config) {
    switch (name) {
      case "keys": {
        return target[name] || new Proxy({} as KeysConfig, keysConfigHandler);
      }
      case "wrapWordsClass": {
        return target[name] || undefined;
      }
      case "theme": {
        return target[name] || "light";
      }
      case "speed": {
        return target[name] || 10;
      }
      case "rootEl": {
        return target[name] || document.body;
      }
      default: {
        return target[name];
      }
    }
  },
};

export default function run(config: Config) {
  const p = new Proxy(config, configHandler) as Required<Config>;
  if (state.active) return;
  if (p.wrapWordsClass) wrapWords(p.wrapWordsClass);
  document.documentElement.style.overflow = "hidden";

  const proxy = state as unknown as ActiveState;
  proxy.active = true;
  proxy.canvas = new Canvas();
  proxy.gameState = new GameState(
    config.removedClass,
    p.theme,
    p.speed,
    p.rootEl
  );
  p.rootEl.style.transform = "translateY(0)";
  const eventHandlers = getEventHandlers(p.keys)!;

  function preventDefault(e: Event) {
    e.preventDefault();
  }

  window.addEventListener("resize", eventHandlers.resizeCanvas);

  window.addEventListener("mousemove", eventHandlers.changeAimPos);
  window.addEventListener("mousedown", eventHandlers.shoot);
  window.addEventListener("mouseup", eventHandlers.resetShoot);

  window.addEventListener("keydown", eventHandlers.handleKeyPress);
  window.addEventListener("keyup", eventHandlers.handleKeyUp);

  window.addEventListener("contextmenu", preventDefault);

  animate();

  window.addEventListener("keydown", function deactivate(e) {
    if (e.key != p.keys.deactivate) return;
    e.preventDefault();

    proxy.canvas?.remove();
    state.active = false;
    state.canvas = null;
    state.gameState = null;

    window.removeEventListener("resize", eventHandlers.resizeCanvas);
    window.removeEventListener("mousemove", eventHandlers.changeAimPos);
    window.removeEventListener("mousedown", eventHandlers.shoot);
    window.removeEventListener("mouseup", eventHandlers.resetShoot);
    window.removeEventListener("keydown", eventHandlers.handleKeyPress);
    window.removeEventListener("keyup", eventHandlers.handleKeyUp);
    window.removeEventListener("contextmenu", preventDefault);

    window.removeEventListener("keydown", deactivate);

    document
      .querySelectorAll(`.${config.removedClass}`)
      .forEach((el) => el.classList.remove(config.removedClass));
    document.documentElement.style.overflow = "scroll";

    const translateVal = getTranslateY(p.rootEl);
    p.rootEl.style.transform = "";
    window.scrollTo(0, -translateVal + window.scrollY);

    config.onRemove && config.onRemove();
  });
}
