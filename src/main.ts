import Canvas from './classes/Canvas';
import GameState from './classes/GameState';
import './style.css';

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

function toggleKeypress(key: string, keyIsPressed: boolean) {
  if (!state.active) return;

  switch (key) {
    case 'a':
    case 'ArrowLeft': {
      state.gameState.keyPress.keys.left.pressed = keyIsPressed;
      state.gameState.spaceship.accelerating = keyIsPressed;
      break;
    }
    case 'd':
    case 'ArrowRight': {
      state.gameState.keyPress.keys.right.pressed = keyIsPressed;
      state.gameState.spaceship.accelerating = keyIsPressed;
      break;
    }
    case 'w':
    case 'ArrowUp': {
      state.gameState.keyPress.keys.up.pressed = keyIsPressed;
      state.gameState.spaceship.accelerating = keyIsPressed;
      break;
    }
    case 's':
    case 'ArrowDown': {
      state.gameState.keyPress.keys.down.pressed = keyIsPressed;
      state.gameState.spaceship.accelerating = keyIsPressed;
      break;
    }
  }
}

function getEventHandlers() {
  if (!state.active) return;
  return {
    resizeCanvas: () => {
      state.gameState.shootables.list = state.gameState.shootables.getList();
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
          500
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
      toggleKeypress(e.key, true);
    },

    handleKeyUp: (e: KeyboardEvent) => {
      toggleKeypress(e.key, false);
    },
  };
}
window.addEventListener('dblclick', run);
export default function run() {
  if (state.active) return;
  document.documentElement.style.overflow = 'hidden';

  const proxy = state as unknown as ActiveState;
  proxy.active = true;
  proxy.canvas = new Canvas();
  proxy.gameState = new GameState();
  const eventHandlers = getEventHandlers()!;

  window.addEventListener('resize', eventHandlers.resizeCanvas);

  window.addEventListener('mousemove', eventHandlers.changeAimPos);
  window.addEventListener('mousedown', eventHandlers.shoot);
  window.addEventListener('mouseup', eventHandlers.resetShoot);

  window.addEventListener('keydown', eventHandlers.handleKeyPress);
  window.addEventListener('keyup', eventHandlers.handleKeyUp);

  animate();

  window.addEventListener('keydown', function deactivate(e) {
    if (e.key != ' ') return;

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

    window.removeEventListener('keydown', deactivate);

    document.documentElement.style.overflow = 'scroll';
  });
}
