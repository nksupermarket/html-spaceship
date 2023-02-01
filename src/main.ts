import { Config, KeysConfig } from '../types/interfaces';
import Canvas from './classes/Canvas';
import GameState from './classes/GameState';
import './style.css';
import { getTranslateY } from './utils/misc';
import wrapWords from './wrapWords';

interface ActiveState {
  canvas: Canvas;
  gameState: GameState;
  active: true;
}
interface DeactiveState {
  canvas: null;
  gameState: null;
  active: false;
}
const state: DeactiveState | ActiveState = {
  canvas: null,
  gameState: null,
  active: false,
};

function animate() {
  if (!state.active) return;
  state.gameState.update();
  state.canvas.draw(state.gameState.spaceship);
  requestAnimationFrame(animate);
}

const toggleKeyPress =
  (keysConfig: KeysConfig, state: DeactiveState | ActiveState) =>
  (key: string, keyIsPressed: boolean) => {
    if (!state.active) return;

    switch (key) {
      case keysConfig.left: {
        state.gameState.keyPress.keys.left.pressed = keyIsPressed;
        state.gameState.spaceship.accelerating = keyIsPressed;
        break;
      }
      case keysConfig.right: {
        state.gameState.keyPress.keys.right.pressed = keyIsPressed;
        state.gameState.spaceship.accelerating = keyIsPressed;
        break;
      }
      case keysConfig.up: {
        state.gameState.keyPress.keys.up.pressed = keyIsPressed;
        state.gameState.spaceship.accelerating = keyIsPressed;
        break;
      }
      case keysConfig.down: {
        state.gameState.keyPress.keys.down.pressed = keyIsPressed;
        state.gameState.spaceship.accelerating = keyIsPressed;
        break;
      }
    }
  };

function getEventHandlers(keysConfig: KeysConfig) {
  if (!state.active) return;
  const onKeyPress = toggleKeyPress(keysConfig, state);
  return {
    resizeCanvas: () => {
      state.gameState.shootables.list = state.gameState.shootables.getList();
      state.gameState.boundaries.list = state.gameState.boundaries.getList();
      state.canvas.setCorrectSize();
    },

    changeAimPos: (e: MouseEvent) => {
      state.gameState.mouse.x = e.clientX;
      state.gameState.mouse.y = e.clientY;
    },

    shoot: (e: MouseEvent) => {
      e.preventDefault();
      state.gameState.keyPress.keys.click.pressed = true;
      if (!state.gameState.keyPress.keys.click.timer)
        state.gameState.keyPress.setTimer(
          'click',
          () => (state.gameState.spaceship.shotAvailable = true),
          250
        );
    },

    resetShoot: (e: MouseEvent) => {
      e.preventDefault();
      state.gameState.spaceship.shotAvailable = true;
      state.gameState.keyPress.keys.click.pressed = false;
      if (state.gameState.keyPress.keys.click.timer)
        state.gameState.keyPress.removeTimer();
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
      case 'left': {
        return target[name] || 'a';
      }
      case 'right': {
        return target[name] || 'd';
      }
      case 'up': {
        return target[name] || 'w';
      }
      case 'down': {
        return target[name] || 's';
      }
      case 'deactivate': {
        return target[name] || ' ';
      }
    }
  },
};

let configHandler = {
  get: function (target: Config, name: string) {
    switch (name) {
      case 'keys': {
        return target[name] || new Proxy({} as KeysConfig, keysConfigHandler);
      }
      case 'wrapWordsClass': {
        return target[name] || undefined;
      }
      case 'theme': {
        return target[name] || 'light';
      }
    }
  },
};

export default function run(config: Config) {
  const p = new Proxy(config, configHandler) as Required<Config>;
  if (state.active) return;
  if (p.wrapWordsClass) wrapWords(p.wrapWordsClass);
  document.documentElement.style.overflow = 'hidden';

  const proxy = state as unknown as ActiveState;
  proxy.active = true;
  proxy.canvas = new Canvas();
  proxy.gameState = new GameState(config.removedClass, p.theme);
  const eventHandlers = getEventHandlers(p.keys)!;

  function preventDefault(e: Event) {
    e.preventDefault();
  }

  window.addEventListener('resize', eventHandlers.resizeCanvas);

  window.addEventListener('mousemove', eventHandlers.changeAimPos);
  window.addEventListener('mousedown', eventHandlers.shoot);
  window.addEventListener('mouseup', eventHandlers.resetShoot);

  window.addEventListener('keydown', eventHandlers.handleKeyPress);
  window.addEventListener('keyup', eventHandlers.handleKeyUp);

  window.addEventListener('contextmenu', preventDefault);

  animate();

  window.addEventListener('keydown', function deactivate(e) {
    if (e.key != p.keys.deactivate) return;
    e.preventDefault();

    proxy.canvas?.remove();
    state.active = false;
    state.canvas = null;
    state.gameState = null;

    window.removeEventListener('resize', eventHandlers.resizeCanvas);
    window.removeEventListener('mousemove', eventHandlers.changeAimPos);
    window.removeEventListener('mousedown', eventHandlers.shoot);
    window.removeEventListener('mouseup', eventHandlers.resetShoot);
    window.removeEventListener('keydown', eventHandlers.handleKeyPress);
    window.removeEventListener('keyup', eventHandlers.handleKeyUp);
    window.removeEventListener('contextmenu', preventDefault);

    window.removeEventListener('keydown', deactivate);

    document
      .querySelectorAll(`.${config.removedClass}`)
      .forEach((el) => el.classList.remove(config.removedClass));
    document.documentElement.style.overflow = 'scroll';

    const translateVal = getTranslateY(this.document.body);
    document.body.style.transform = `translateY(${0}px)`;
    window.scrollTo(0, -translateVal + window.scrollY);
  });
}
