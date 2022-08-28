import { Direction, Mouse } from '../../types/types';
import { DIRECTIONS } from '../utils/constants';
import Shootables from './ShootableList';
import Boundary from './Boundary';
import Spaceship from './Spaceship';
import { checkIfInsideDiameter } from '../utils/checkCollision';
import KeyPress from './KeyPress';
import BoundaryList from './BoundaryList';

export default class Canvas {
  spaceship: Spaceship;
  el: HTMLCanvasElement;

  constructor() {
    this.el = document.createElement('canvas');
    document.body.appendChild(this.el);
    this.setCorrectSize();

    this.spaceship = new Spaceship({
      y: window.innerHeight / 2,
      x: window.innerWidth / 2,
    });
  }

  setCorrectSize() {
    this.el.height = window.innerHeight;
    this.el.width = window.innerWidth;
  }

  draw() {
    const c = this.el.getContext('2d');
    if (!c) return;

    c.clearRect(0, 0, window.innerWidth, window.innerHeight);
    this.spaceship.bullets.forEach((b) => b.draw(c));
    this.spaceship.draw(c);
  }

  update(
    mouse: Mouse,
    keyPress: KeyPress,
    boundaries: BoundaryList,
    shootables: Shootables
  ) {
    this.spaceship.alignToMouse(mouse, {
      x: window.innerWidth,
      y: window.innerHeight,
    });

    // handle key press
    let keyPressed = false;
    let dir: Direction;
    for (dir of DIRECTIONS) {
      if (keyPress.keys[dir].pressed) {
        keyPressed = true;
        this.spaceship.move(dir);
        this.spaceship.resetDeceleration();
      }
    }
    if (keyPress.keys.click.pressed) this.spaceship.shoot();

    this.spaceship.updatePosition(
      { x: window.innerWidth, y: window.innerHeight },
      boundaries.list
    );

    if (
      !keyPressed &&
      (this.spaceship.velocity.x || this.spaceship.velocity.y) &&
      this.spaceship.decelerationTime >= 0 &&
      this.spaceship.decelerationTime <= 1
    )
      this.spaceship.decelerate();

    this.spaceship.bullets.forEach((b) => {
      b.updatePosition();
      shootables.list.forEach((shootable) => {
        const collision = checkIfInsideDiameter(shootable, b);
        if (collision) {
          this.spaceship.removeBullet(b.id);
          shootable.onHit();
        }
      });
    });

    shootables.removeDeadEls();
    boundaries.updateSizes();
    boundaries.removeEmptyBoundaries();
  }
}
