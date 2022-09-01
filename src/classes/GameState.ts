import Spaceship from './Spaceship';
import { Mouse, Direction } from '../../types/types';
import { DIRECTIONS } from '../utils/constants';
import KeyPress from './KeyPress';
import BoundaryList from './BoundaryList';
import ShootableList from './ShootableList';
import { checkIfInsideRect } from '../utils/checkCollision';

export default class GameState {
  spaceship: Spaceship;
  boundaries: BoundaryList;
  shootables: ShootableList;
  mouse: Mouse;
  keyPress: KeyPress;
  scrollBoundary: number;

  constructor() {
    this.spaceship = new Spaceship({
      y: window.innerHeight / 2,
      x: window.innerWidth / 2,
    });

    this.scrollBoundary = window.innerHeight * 0.8;
    this.boundaries = new BoundaryList();
    this.shootables = new ShootableList();
    this.keyPress = new KeyPress();
    this.mouse = {
      x: null,
      y: null,
    };
  }

  update() {
    this.spaceship.alignToMouse(this.mouse, {
      x: window.innerWidth,
      y: window.innerHeight,
    });

    // handle key press
    let keyPressed = false;
    let dir: Direction;
    for (dir of DIRECTIONS) {
      if (this.keyPress.keys[dir].pressed) {
        keyPressed = true;
        this.spaceship.move(dir);
        this.spaceship.resetDeceleration();
      }
    }
    if (this.keyPress.keys.click.pressed) this.spaceship.shoot();

    if (this.spaceship.y + this.spaceship.velocity.y > this.scrollBoundary) {
      document.documentElement.scrollTop += this.spaceship.velocity.y;
      console.log(
        (document.documentElement.scrollTop += this.spaceship.velocity.y),
        this.spaceship.velocity.y
      );
      this.spaceship.velocity.y = 0;
    }

    this.spaceship.updatePosition(
      { x: window.innerWidth, y: window.innerHeight },
      this.boundaries.list
    );

    // handle deceleration
    if (
      !keyPressed &&
      (this.spaceship.velocity.x || this.spaceship.velocity.y) &&
      this.spaceship.decelerationTime >= 0 &&
      this.spaceship.decelerationTime <= 1
    )
      this.spaceship.decelerate();

    // handle bullets
    this.spaceship.bullets.forEach((b) => {
      b.updatePosition();
      this.shootables.list.forEach((shootable) => {
        const collision = checkIfInsideRect(shootable, b);
        if (collision) {
          this.spaceship.removeBullet(b.id);
          shootable.onHit();
        }
      });
    });

    this.shootables.removeDeadEls();
    this.boundaries.updateSizes();
    this.boundaries.removeEmptyBoundaries();
  }
}
