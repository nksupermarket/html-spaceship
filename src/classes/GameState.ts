import Spaceship from './Spaceship';
import { Mouse, Direction, XY } from '../../types/types';
import { DIRECTIONS } from '../utils/constants';
import KeyPress from './KeyPress';
import BoundaryList from './BoundaryList';
import ShootableList from './ShootableList';
import { checkIfInsideRect } from '../utils/checkCollision';
import { getTranslateY } from '../utils/misc';

export default class GameState {
  spaceship: Spaceship;
  boundaries: BoundaryList;
  shootables: ShootableList;
  mouse: Mouse;
  keyPress: KeyPress;
  scrollBoundary: { top: number; bottom: number };
  scrollSpeed: number;

  constructor(
    startPos = {
      y: window.innerHeight / 2,
      x: window.innerWidth / 2,
    }
  ) {
    this.spaceship = new Spaceship(startPos);

    this.scrollSpeed = 0;
    this.scrollBoundary = {
      top: window.innerHeight * 0.3,
      bottom: window.innerHeight * 0.7,
    };
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
        if (dir === 'up') this.scrollSpeed = 0;
      }
    }
    if (this.keyPress.keys.click.pressed) this.spaceship.shoot();

    // handle spaceship running into boundaries
    this.spaceship.bounce(
      { x: window.innerWidth, y: window.innerHeight },
      this.boundaries.list
    );

    // handle scroll
    function shift(this: GameState, translateVal: number) {
      document.body.style.transform = `translateY(${translateVal}px)`;
      this.shootables.list.forEach((el) => {
        el.y -= this.spaceship.velocity.y;
      });

      this.boundaries.list.forEach((el) => {
        el.y -= this.spaceship.velocity.y;
      });
    }
    if (
      this.spaceship.y < this.scrollBoundary.bottom &&
      this.spaceship.y + this.spaceship.velocity.y > this.scrollBoundary.bottom
    ) {
      const translateVal =
        getTranslateY(document.body) - this.spaceship.velocity.y;

      if (
        Math.abs(translateVal) <
        document.documentElement.scrollHeight - window.innerHeight
      ) {
        shift.call(this, translateVal);
      }
    }

    if (
      this.spaceship.y > this.scrollBoundary.top &&
      Math.floor(this.spaceship.y + this.spaceship.velocity.y) <=
        this.scrollBoundary.top
    ) {
      const translateVal =
        getTranslateY(document.body) - this.spaceship.velocity.y;
      if (translateVal < 0) {
        shift.call(this, translateVal);
      }
    }

    const translateVal = Math.floor(Math.abs(getTranslateY(document.body)));
    if (
      // spaceship is in between scrollBoundaries
      Math.floor(this.spaceship.y + this.spaceship.velocity.y) >
        this.scrollBoundary.top &&
      Math.floor(this.spaceship.y + this.spaceship.velocity.y) <
        this.scrollBoundary.bottom
    ) {
      this.spaceship.updateYPosition();
    } else if (
      // when we are on top of the page, we want to be able to go beyond scrollBoundary.top
      translateVal < 30 &&
      Math.floor(this.spaceship.y + this.spaceship.velocity.y) <
        this.scrollBoundary.bottom
    ) {
      this.spaceship.updateYPosition();
    } else if (
      // when we are on bottom of page, we want to be able to go beyond scrollBoundary.bottom
      translateVal + 30 >
        document.documentElement.scrollHeight - window.innerHeight &&
      Math.floor(this.spaceship.y + this.spaceship.velocity.y) >
        this.scrollBoundary.top
    ) {
      this.spaceship.updateYPosition();
    }
    this.spaceship.updateXPosition();

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
