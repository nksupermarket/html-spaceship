import Spaceship from './classes/Spaceship';
import { Direction } from '../types/types';
import KeyPress from './classes/KeyPress';
import Shootables from './classes/Shootables';
import { checkIfInsideDiameter } from './utils/checkCollision';

const canvas = document.querySelector('canvas') as HTMLCanvasElement;

function changeCanvasSize() {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
}

changeCanvasSize();

const spaceship = new Spaceship({
  y: window.innerHeight / 2,
  x: window.innerWidth / 2,
});

const shootables = new Shootables();

const keyPress = new KeyPress();

function update() {
  let dir: Direction;
  for (dir in spaceship.move) {
    if (keyPress.keys[dir].pressed) spaceship.move[dir]();
  }
  if (keyPress.keys.click.pressed) spaceship.shoot();

  shootables.list.forEach((se) => {
    const collision = checkIfInsideDiameter(spaceship, se);
    if (collision) spaceship.velocity = { x: 0, y: 0 };
  });
  spaceship.updatePosition({ x: window.innerWidth, y: window.innerHeight });

  spaceship.applyInertia();

  spaceship.bullets.forEach((b) => {
    b.updatePosition();
    shootables.list.forEach((shootable) => {
      const collision = checkIfInsideDiameter(shootable, b);
      if (collision) {
        spaceship.removeBullet(b.id);
        shootable.lifePoints -= 10;
      }
    });
  });

  shootables.removeDeadEls();
}

const mouse: {
  x: null | number;
  y: null | number;
} = {
  x: null,
  y: null,
};

function draw() {
  const c = canvas.getContext('2d');
  if (!c) return;

  c.clearRect(0, 0, window.innerWidth, window.innerHeight);
  spaceship.bullets.forEach((b) => b.draw(c));
  spaceship.draw(c, mouse);
  //   c.restore();
}

function animate() {
  update();
  draw();
  requestAnimationFrame(animate);
}

animate();

window.addEventListener('mousemove', (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

function toggleKeypress(key: string, bool: boolean) {
  switch (key) {
    case 'a':
    case 'ArrowLeft': {
      keyPress.keys.left.pressed = bool;
      break;
    }
    case 'd':
    case 'ArrowRight': {
      keyPress.keys.right.pressed = bool;
      break;
    }
    case 'w':
    case 'ArrowUp': {
      keyPress.keys.up.pressed = bool;
      break;
    }
    case 's':
    case 'ArrowDown': {
      keyPress.keys.down.pressed = bool;
      break;
    }
  }
}

window.addEventListener('mousedown', () => {
  keyPress.keys.click.pressed = true;
  if (!keyPress.keys.click.timer)
    keyPress.setTimer('click', () => (spaceship.shotAvailable = true), 200);
});
window.addEventListener('mouseup', () => {
  spaceship.shotAvailable = true;
  keyPress.keys.click.pressed = false;
  if (keyPress.keys.click.timer) keyPress.removeTimer();
});

window.addEventListener('keydown', (e) => {
  toggleKeypress(e.key, true);
});
window.addEventListener('keyup', (e) => {
  toggleKeypress(e.key, false);
});
