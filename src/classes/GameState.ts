import { Direction, Mouse } from '../../types/types';
import {
  checkCollisionBtwnCircles,
  checkIfInsideRect,
} from '../utils/checkCollision';
import { DIRECTIONS } from '../utils/constants';
import getStartPos from '../utils/getStartPos';
import { getTranslateY } from '../utils/misc';
import BoundaryList from './BoundaryList';
import KeyPress from './KeyPress';
import ShootableList from './ShootableList';
import Spaceship from './Spaceship';

export default class GameState {
  spaceship: Spaceship;
  boundaries: BoundaryList;
  shootables: ShootableList;
  mouse: Mouse;
  keyPress: KeyPress;
  scrollBoundary: { top: number; bottom: number };

  constructor(theme: 'light' | 'dark' = 'light') {
    this.scrollBoundary = {
      // local minima/maxima that triggers a scroll upon contact
      top: window.innerHeight * 0.3,
      bottom: window.innerHeight * 0.7,
    };
    this.boundaries = new BoundaryList();
    this.spaceship = new Spaceship(getStartPos(this.boundaries.list), theme);
    this.shootables = new ShootableList();
    this.keyPress = new KeyPress();
    this.mouse = {
      x: null,
      y: null,
    };
  }

  update() {
    this.spaceship.alignToMouse(this.mouse);

    // handle key press
    let dir: Direction;
    for (dir of DIRECTIONS) {
      if (this.keyPress.keys[dir].pressed) {
        this.spaceship.move(dir);
        const axis = dir === 'left' || dir === 'right' ? 'x' : 'y';
        this.spaceship.resetDeceleration(axis);
      }
    }
    if (this.keyPress.keys.click.pressed) this.spaceship.shoot();

    // handle spaceship running into boundaries
    this.spaceship.handleBoundsCollision({
      x: window.innerWidth,
      y: window.innerHeight,
    });
    this.spaceship.handleBoundaryCollision(this.boundaries.list);

    // handle scroll

    const distanceFromTopOfDocumentToLastScreen = Math.floor(
      document.documentElement.scrollHeight -
        window.innerHeight -
        window.scrollY
    );
    const translateVal = getTranslateY(document.body);
    const distanceTraveled = Math.floor(translateVal * -1);

    const inBetweenScrollBoundaries =
      this.spaceship.y + this.spaceship.velocity.y > this.scrollBoundary.top &&
      this.spaceship.y + this.spaceship.velocity.y < this.scrollBoundary.bottom;
    const inFirstScreenGoingUp =
      distanceTraveled <= -window.scrollY &&
      this.spaceship.y + this.spaceship.velocity.y < this.scrollBoundary.bottom;
    const inLastScreenGoingDown =
      distanceTraveled === distanceFromTopOfDocumentToLastScreen &&
      this.spaceship.y + this.spaceship.velocity.y > this.scrollBoundary.top;
    const belowBottomBoundGoingUp =
      this.spaceship.y > this.scrollBoundary.bottom &&
      this.spaceship.velocity.y < 0;
    const aboveTopBoundGoingDown =
      this.spaceship.y < this.scrollBoundary.top &&
      this.spaceship.velocity.y > 0;

    let amountToShift = 0;
    // bullets need to read this amount to see how much to shift as body translateY changes
    if (
      inBetweenScrollBoundaries ||
      inFirstScreenGoingUp ||
      inLastScreenGoingDown
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
        Math.abs(newTranslateVal) < distanceFromTopOfDocumentToLastScreen
      ) {
        document.body.style.transform = `translateY(${newTranslateVal}px)`;
        amountToShift = this.spaceship.velocity.y;
      } else {
        // need to set the translate value of body to distanceFromTopOfDocumentToLastScreen bc that's what we read to see if the spaceship can cross the bottom scrollBoundary
        document.body.style.transform = `translateY(${-distanceFromTopOfDocumentToLastScreen}px)`;

        amountToShift =
          distanceFromTopOfDocumentToLastScreen -
          Math.abs(getTranslateY(document.body));
      }
    } else if (
      //spaceship is going to push against top scrollBoundary
      this.spaceship.y > this.scrollBoundary.top &&
      this.spaceship.y + this.spaceship.velocity.y < this.scrollBoundary.top
    ) {
      const newTranslateVal = translateVal - this.spaceship.velocity.y;
      if (newTranslateVal < window.scrollY) {
        document.body.style.transform = `translateY(${newTranslateVal}px)`;

        amountToShift = this.spaceship.velocity.y;
      } else {
        document.body.style.transform = `translateY(${window.scrollY}px)`;

        amountToShift = Math.abs(getTranslateY(document.body));
      }
    } else if (belowBottomBoundGoingUp || aboveTopBoundGoingDown) {
      this.spaceship.updateYPosition();
    }

    this.spaceship.updateXPosition();

    // handle deceleration
    if (this.spaceship.velocity.x || this.spaceship.velocity.y)
      this.spaceship.decelerate();

    // .removeBullet() mutates the bullet array so this feels safer
    const bulletsToBeDeleted = [];
    //update state
    for (
      let i = 0;
      i <
      Math.max(
        this.shootables.list.length,
        this.boundaries.list.length,
        this.spaceship.bullets.length
      );
      i++
    ) {
      if (i < this.spaceship.bullets.length) {
        const bullet = this.spaceship.bullets[i];
        bullet.update();

        if (bullet.status === 'dead') bulletsToBeDeleted.push(i);
        else if (bullet.status == 'alive') {
          for (const shootable of this.shootables.list) {
            const collision = shootable.circle
              ? checkCollisionBtwnCircles(shootable, bullet)
              : checkIfInsideRect(shootable, bullet);
            if (collision) {
              bullet.onHit();
              shootable.onHit();
            }
          }
        }
      }

      if (i < this.shootables.list.length) {
        this.shootables.list[i].updatePos();
        this.shootables.removeElIfDead(i);
      }
      if (i < this.boundaries.list.length) {
        this.boundaries.list[i].updatePos();
        this.boundaries.list[i].recalculateSize();
        this.boundaries.removeBoundaryIfEmpty(i);
      }
      if (i < this.spaceship.bullets.length) {
        this.spaceship.bullets[i].y -= amountToShift;
      }
    }

    for (const i of bulletsToBeDeleted) {
      this.spaceship.removeBullet(i);
    }
  }
}
