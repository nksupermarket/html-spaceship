import Canvas from './classes/Canvas';
import GameState from './classes/GameState';
import './style.css';

document.documentElement.style.overflow = 'hidden';

const canvas = new Canvas();
const gameState = new GameState();

function animate() {
  gameState.update();
  canvas.draw(gameState.spaceship);
  requestAnimationFrame(animate);
}

animate();

window.addEventListener('resize', () => {
  gameState.shootables.list = gameState.shootables.getList();
  canvas.setCorrectSize();
});

window.addEventListener('mousemove', (e) => {
  gameState.mouse.x = e.clientX;
  gameState.mouse.y = e.clientY;
});

function toggleKeypress(key: string, keyIsPressed: boolean) {
  switch (key) {
    case 'a':
    case 'ArrowLeft': {
      gameState.keyPress.keys.left.pressed = keyIsPressed;
      gameState.spaceship.accelerating = keyIsPressed;
      break;
    }
    case 'd':
    case 'ArrowRight': {
      gameState.keyPress.keys.right.pressed = keyIsPressed;
      gameState.spaceship.accelerating = keyIsPressed;
      break;
    }
    case 'w':
    case 'ArrowUp': {
      gameState.keyPress.keys.up.pressed = keyIsPressed;
      gameState.spaceship.accelerating = keyIsPressed;
      break;
    }
    case 's':
    case 'ArrowDown': {
      gameState.keyPress.keys.down.pressed = keyIsPressed;
      gameState.spaceship.accelerating = keyIsPressed;
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
      500
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
