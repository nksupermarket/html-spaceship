import KeyPress from './classes/KeyPress';
import Canvas from './classes/Canvas';
import ShootableList from './classes/ShootableList';
import Boundary from './classes/Boundary';
import BoundaryList from './classes/BoundaryList';
import GameState from './classes/GameState';

const canvas = new Canvas();
const gameState = new GameState();

function animate() {
  gameState.update();
  canvas.draw(gameState.spaceship);
  scroll();
  requestAnimationFrame(animate);
}

animate();

// window.addEventListener('scroll', () => {
//   const oldY = windowY;
//   windowY = window.scrollY;
//   const diff = oldY - windowY;

//   shootables.list.forEach((el) => {
//     el.y += diff;
//   });

//   boundaries.list.forEach((el) => {
//     el.y += diff;
//   });
// });

window.addEventListener('resize', () => {
  gameState.shootables.list = gameState.shootables.getList();
  canvas.setCorrectSize();
});

window.addEventListener('mousemove', (e) => {
  gameState.mouse.x = e.clientX;
  gameState.mouse.y = e.clientY;
});

function toggleKeypress(key: string, bool: boolean) {
  switch (key) {
    case 'a':
    case 'ArrowLeft': {
      gameState.keyPress.keys.left.pressed = bool;
      break;
    }
    case 'd':
    case 'ArrowRight': {
      gameState.keyPress.keys.right.pressed = bool;
      break;
    }
    case 'w':
    case 'ArrowUp': {
      gameState.keyPress.keys.up.pressed = bool;
      break;
    }
    case 's':
    case 'ArrowDown': {
      gameState.keyPress.keys.down.pressed = bool;
      break;
    }
  }
}

window.addEventListener('mousedown', (e) => {
  e.preventDefault();
  gameState.keyPress.keys.click.pressed = true;
  if (!gameState.keyPress.keys.click.timer)
    gameState.keyPress.setTimer(
      'click',
      () => (gameState.spaceship.shotAvailable = true),
      200
    );
});
window.addEventListener('mouseup', (e) => {
  e.preventDefault();
  gameState.spaceship.shotAvailable = true;
  gameState.keyPress.keys.click.pressed = false;
  if (gameState.keyPress.keys.click.timer) gameState.keyPress.removeTimer();
});

window.addEventListener('keydown', (e) => {
  toggleKeypress(e.key, true);
});
window.addEventListener('keyup', (e) => {
  toggleKeypress(e.key, false);
});
