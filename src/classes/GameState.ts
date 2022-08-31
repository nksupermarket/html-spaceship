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

  constructor() {
    this.spaceship = new Spaceship({
      y: window.innerHeight / 2,
      x: window.innerWidth / 2,
    });

    this.boundaries = new BoundaryList();
    this.shootables = new ShootableList();
  }

  update(mouse: Mouse, keyPress: KeyPress) {
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
      this.boundaries.list
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
