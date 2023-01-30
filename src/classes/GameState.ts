import Spaceship from './Spaceship';
import { Mouse, Direction } from '../../types/types';
import { DIRECTIONS } from '../utils/constants';
import KeyPress from './KeyPress';
import BoundaryList from './BoundaryList';
import ShootableList from './ShootableList';
import {
  checkIfInsideRect,
  checkCollisionBtwnCircles,
} from '../utils/checkCollision';
import { getTranslateY } from '../utils/misc';
import getStartPos from '../utils/getStartPos';
import { XY } from '../../types/interfaces';

export default class GameState {
  spaceship: Spaceship;
  boundaries: BoundaryList;
  shootables: ShootableList;
  mouse: Mouse;
  keyPress: KeyPress;
  scrollBoundary: { top: number; bottom: number };
  scrollSpeed: number;

  constructor(startPos?: XY) {
    this.scrollSpeed = 0;
    this.scrollBoundary = {
      // local minima/maxima that triggers a scroll upon contact
      top: window.innerHeight * 0.3,
      bottom: window.innerHeight * 0.7,
    };
    this.boundaries = new BoundaryList();
    this.spaceship = new Spaceship(
      startPos || getStartPos(this.boundaries.list)
    );
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

    // handle scroll
    function shift(this: GameState, translateVal: number, change: number) {
      document.body.style.transform = `translateY(${translateVal}px)`;
      this.shootables.list.forEach((el) => {
        el.y -= change;
      });

      this.boundaries.list.forEach((el) => {
        el.y -= change;
      });
      this.spaceship.bullets.forEach((b) => {
        b.y -= change;
      });
    }
    const distanceFromTopOfDocumentToLastScreen = Math.floor(
      document.documentElement.scrollHeight -
        window.innerHeight -
        window.scrollY
    );
    const translateVal = getTranslateY(document.body);
    const distanceTraveled = Math.floor(Math.abs(translateVal));
    if (
      // spaceship is in between scrollBoundaries
      this.spaceship.y + this.spaceship.velocity.y > this.scrollBoundary.top &&
      this.spaceship.y + this.spaceship.velocity.y < this.scrollBoundary.bottom
    ) {
      this.spaceship.updateYPosition();
    } else if (
      // when we are on top of the page, we want to be able to go beyond scrollBoundary.top
      distanceTraveled === window.scrollY &&
      this.spaceship.y + this.spaceship.velocity.y < this.scrollBoundary.bottom
    ) {
      this.spaceship.updateYPosition();
    } else if (
      // when we are on bottom of page, we want to be able to go beyond scrollBoundary.bottom
      distanceTraveled === distanceFromTopOfDocumentToLastScreen &&
      this.spaceship.y + this.spaceship.velocity.y > this.scrollBoundary.top
    ) {
      this.spaceship.updateYPosition();
    } else if (
      // spaceship is going to push against the bottom scrollBoundary
      this.spaceship.y < this.scrollBoundary.bottom &&
      this.spaceship.y + this.spaceship.velocity.y > this.scrollBoundary.bottom
    ) {
      const newTranslateVal = translateVal - this.spaceship.velocity.y;

      if (
        //if spaceship is above the last page
        // need to add scrollY to account for the start position of the spaceship
        Math.abs(newTranslateVal) < distanceFromTopOfDocumentToLastScreen
      ) {
        shift.call(this, newTranslateVal, this.spaceship.velocity.y);
      } else {
        // need to set the translate value of body to distanceFromTopOfDocumentToLastScreen bc that's what we read to see if the spaceship can cross the bottom scrollBoundary
        shift.call(
          this,
          -distanceFromTopOfDocumentToLastScreen,
          distanceFromTopOfDocumentToLastScreen -
            Math.abs(getTranslateY(document.body))
        );
      }
    } else if (
      //spaceship is going to push against top scrollBoundary
      this.spaceship.y > this.scrollBoundary.top &&
      this.spaceship.y + this.spaceship.velocity.y < this.scrollBoundary.top
    ) {
      const newTranslateVal = translateVal - this.spaceship.velocity.y;
      if (newTranslateVal < window.scrollY) {
        shift.call(this, newTranslateVal, this.spaceship.velocity.y);
      } else {
        shift.call(
          this,
          window.scrollY,
          Math.abs(getTranslateY(document.body))
        );
      }
    }

    this.spaceship.updateXPosition();

    // handle spaceship running into boundaries
    this.spaceship.bounce(
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
      if (b.status === 'dead') this.spaceship.removeBullet(b.id);
      b.update();
      if (b.status !== 'alive') return;
      this.shootables.list.forEach((shootable) => {
        const collision = shootable.circle
          ? checkCollisionBtwnCircles(shootable, b)
          : checkIfInsideRect(shootable, b);
        if (collision) {
          b.onHit();
          shootable.onHit();
        }
      });
    });

    this.shootables.removeDeadEls();
    this.shootables.updatePositions();

    this.boundaries.updateSizes();
    this.boundaries.removeEmptyBoundaries();
    this.boundaries.updatePositions();
  }
}
