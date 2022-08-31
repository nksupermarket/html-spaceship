import KeyPress from './classes/KeyPress';
import Canvas from './classes/Canvas';
import ShootableList from './classes/ShootableList';
import Boundary from './classes/Boundary';
import BoundaryList from './classes/BoundaryList';

const canvas = new Canvas();
const boundaries = new BoundaryList();
const shootables = new ShootableList();
const keyPress = new KeyPress();
const mouse: {
  x: null | number;
  y: null | number;
} = {
  x: null,
  y: null,
};
let windowY = 0;

function scroll() {
  if (
    keyPress.keys.down.pressed &&
    (canvas.spaceship.y > window.innerHeight * 0.9 ||
      canvas.spaceship.y + canvas.spaceship.height > window.innerHeight * 0.9)
  ) {
    document.documentElement.scrollTop += 20;
    canvas.spaceship.velocity.y = 0;
    //   if (
    //     document.body.clientHeight - window.innerHeight !==
    //     document.documentElement.scrollTop
    //   )
    //     canvas.spaceship.y = 0.1 * window.innerHeight;
  }

  if (
    keyPress.keys.up.pressed &&
    (canvas.spaceship.y < window.innerHeight * 0.1 ||
      canvas.spaceship.y + canvas.spaceship.height < window.innerHeight * 0.1)
  ) {
    document.documentElement.scrollTop -= window.innerHeight;
    if (document.documentElement.scrollTop)
      canvas.spaceship.y = 0.9 * window.innerHeight;
  }
}

function animate() {
  canvas.update(mouse, keyPress, boundaries, shootables);
  canvas.draw();
  scroll();
  requestAnimationFrame(animate);
}

animate();

window.addEventListener('scroll', () => {
  const oldY = windowY;
  windowY = window.scrollY;
  const diff = oldY - windowY;

  shootables.list.forEach((el) => {
    el.y += diff;
  });

  boundaries.list.forEach((el) => {
    el.y += diff;
  });
});

window.addEventListener('resize', () => {
  shootables.list = shootables.getList();
  canvas.setCorrectSize();
});

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

window.addEventListener('mousedown', (e) => {
  e.preventDefault();
  keyPress.keys.click.pressed = true;
  if (!keyPress.keys.click.timer)
    keyPress.setTimer(
      'click',
      () => (canvas.spaceship.shotAvailable = true),
      200
    );
});
window.addEventListener('mouseup', (e) => {
  e.preventDefault();
  canvas.spaceship.shotAvailable = true;
  keyPress.keys.click.pressed = false;
  if (keyPress.keys.click.timer) keyPress.removeTimer();
});

window.addEventListener('keydown', (e) => {
  toggleKeypress(e.key, true);
});
window.addEventListener('keyup', (e) => {
  toggleKeypress(e.key, false);
});
