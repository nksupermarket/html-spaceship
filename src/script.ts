import Spaceship from './Spaceship';
import move, { applyInertia, updatePosition } from './utils/move';
import { Direction } from '../types/types';

const canvas = document.querySelector('canvas') as HTMLCanvasElement;

function changeCanvasSize() {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
}

changeCanvasSize();

const spaceship = Spaceship(
  {
    y: window.innerHeight / 2,
    x: window.innerWidth / 2,
    height: 100,
    width: 50,
  },
  20
);

const keyPress: Record<keyof typeof move, boolean> = {
  left: false,
  right: false,
  up: false,
  down: false,
};

function update() {
  let dir: keyof typeof move;
  for (dir in move) {
    if (keyPress[dir]) move[dir](spaceship);
  }
  updatePosition(spaceship);
  applyInertia(spaceship);
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
  const { xCenter, yCenter } = spaceship.getCenter();

  if (mouse.x !== null && mouse.y !== null) {
    const dx = mouse.x - xCenter;
    const dy = mouse.y - yCenter;
    const theta = Math.atan2(dy, dx) - Math.PI / 2;

    spaceship.angle = theta;
  }

  c.clearRect(0, 0, window.innerWidth, window.innerHeight);
  //   c.save();

  c.setTransform(1, 0, 0, 1, 0, 0);

  c.translate(xCenter, yCenter);
  c.rotate(spaceship.angle);
  c.translate(-xCenter, -yCenter);

  c.fillStyle = '#FF0000';
  c.fillRect(spaceship.x, spaceship.y, spaceship.width, spaceship.height);

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

window.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'ArrowLeft': {
      keyPress.left = true;
      break;
    }
    case 'ArrowRight': {
      keyPress.right = true;
      break;
    }
    case 'ArrowUp': {
      keyPress.up = true;
      break;
    }
    case 'ArrowDown': {
      keyPress.down = true;
      break;
    }
  }
});
window.addEventListener('keyup', (e) => {
  switch (e.key) {
    case 'ArrowLeft': {
      keyPress.left = false;
      break;
    }
    case 'ArrowRight': {
      keyPress.right = false;
      break;
    }
    case 'ArrowUp': {
      keyPress.up = false;
      break;
    }
    case 'ArrowDown': {
      keyPress.down = false;
      break;
    }
  }
});
