import { Direction, Mouse } from "../../types/types";
import { closeEnoughForCollision } from "../utils/closeEnoughForCollision";
import {
  checkCollisionBtwnCircles,
  checkIfInsideRect,
} from "../utils/collision";
import { DIRECTIONS, SS_DIMENSIONS } from "../utils/constants";
import getStartPos from "../utils/getStartPos";
import { getTranslateY } from "../utils/misc";
import KeyPress from "./KeyPress";
import Score from "./Score";
import Spaceship from "./entities/Spaceship";
import BoundaryList from "./lists/BoundaryList";
import ShootableList from "./lists/ShootableList";
const bounds = {
  x: window.innerWidth,
  y: window.innerHeight,
};
export default class GameState {
  spaceship: Spaceship;
  boundaries: BoundaryList;
  shootables: ShootableList;
  mouse: Mouse;
  keyPress: KeyPress;
  scrollBoundary: { top: number; bottom: number };
  readonly REMOVE_CLASS: string;
  readonly ROOT_EL: HTMLElement;
  score: Score;

  constructor(
    removeClass: string,
    theme: "light" | "dark",
    speed: number,
    rootEl: HTMLElement
  ) {
    this.scrollBoundary = {
      // local minima/maxima that triggers a scroll upon contact
      top: window.innerHeight * 0.3,
      bottom: window.innerHeight * 0.7,
    };
    this.boundaries = new BoundaryList();
    this.spaceship = new Spaceship(
      getStartPos(this.boundaries.list),
      theme,
      speed
    );
    this.shootables = new ShootableList();
    this.keyPress = new KeyPress();
    this.mouse = {
      x: null,
      y: null,
    };
    this.REMOVE_CLASS = removeClass;
    this.ROOT_EL = rootEl;
    this.score = new Score();
  }

  update() {
    this.spaceship.alignToMouse(this.mouse);
    // handle key press
    let dir: Direction;
    let xAxisPressed = false;
    let yAxisPressed = false;
    for (dir of DIRECTIONS) {
      if (this.keyPress.keys[dir].pressed) {
        this.spaceship.move(dir);
        if (dir === "right" || dir === "left") xAxisPressed = true;
        else yAxisPressed = true;
      }
    }
    if (!yAxisPressed) this.spaceship.decelerate("y");
    if (!xAxisPressed) this.spaceship.decelerate("x");

    if (this.keyPress.keys.click.pressed) this.spaceship.shoot();

    // handle scroll
    const distanceFromTopViewportToBottomOfDoc = Math.floor(
      document.documentElement.scrollHeight - window.innerHeight
    );
    const translateVal = getTranslateY(this.ROOT_EL);
    const yPos = Math.floor(translateVal * -1) + window.scrollY;

    const hittingBottomScrollBound =
      this.spaceship.y + this.spaceship.velocity.y >=
      this.scrollBoundary.bottom;
    const hittingTopScrollBound =
      this.spaceship.y + this.spaceship.velocity.y < this.scrollBoundary.top;
    const inFirstScreen = yPos <= 0;
    const inLastScreen = yPos >= distanceFromTopViewportToBottomOfDoc;

    const goingUp = this.spaceship.velocity.y < 0;
    const goingDown = this.spaceship.velocity.y > 0;

    const belowBottomScrollBound =
      this.spaceship.y >= this.scrollBoundary.bottom;
    const aboveTopScrollBound = this.spaceship.y <= this.scrollBoundary.top;

    let amountToShift = 0;
    // bullets need to read this amount to see how much to shift as the root element translateY changes

    if (
      (!hittingTopScrollBound && !hittingBottomScrollBound) ||
      ((inFirstScreen || belowBottomScrollBound) && goingUp) ||
      ((inLastScreen || aboveTopScrollBound) && goingDown)
    ) {
      this.spaceship.updateYPosition();
    } else if (
      (!belowBottomScrollBound && hittingBottomScrollBound) ||
      (!aboveTopScrollBound && hittingTopScrollBound) ||
      (belowBottomScrollBound && !inLastScreen && goingDown) ||
      (aboveTopScrollBound && !inFirstScreen && goingUp)
    ) {
      this.ROOT_EL.style.transform = `translateY(${
        translateVal - this.spaceship.velocity.y
      }px)`;
      amountToShift = this.spaceship.velocity.y;
    }
    this.spaceship.handleBoundsCollision(bounds);

    this.spaceship.updateXPosition();

    //update state
    this.score.updateDisplay();
    for (
      let i = Math.max(
        this.shootables.list.length,
        this.boundaries.list.length,
        this.spaceship.bullets.length
      );
      i >= 0;
      i--
    ) {
      if (i < this.spaceship.bullets.length) {
        const bullet = this.spaceship.bullets[i];
        bullet.y -= amountToShift;
        bullet.update(bounds);
        if (bullet.status === "dead") this.spaceship.removeBullet(i);
        else if (bullet.status == "alive") {
          for (const shootable of this.shootables.list) {
            if (!closeEnoughForCollision(bullet, shootable, BULLET_SIZE))
              continue;
            const collision = shootable.circle
              ? checkCollisionBtwnCircles(shootable, bullet)
              : checkIfInsideRect(shootable, bullet);
            const axis =
              Math.abs(bullet.velocity.y) > Math.abs(bullet.velocity.x)
                ? "y"
                : "x";
            if (collision) {
              bullet.onHit();
              shootable.onHit(axis);
            }
          }
        }
      }

      if (i < this.shootables.list.length) {
        const shootable = this.shootables.list[i];
        shootable.update();
        if (shootable.lifePoints <= 0) {
          this.score.updateTotal(shootable);
          this.shootables.removeEl(i, this.REMOVE_CLASS);
        }
      }
      if (i < this.boundaries.list.length) {
        const boundary = this.boundaries.list[i];
        if (
          boundary.height != 0 &&
          closeEnoughForCollision(
            this.spaceship,
            boundary,
            SS_DIMENSIONS.height
          )
        ) {
          if (boundary.kind === "circle")
            this.spaceship.handleCollisionWithCircle(boundary);
          else this.spaceship.handleCollisionWithRect(boundary);
        }

        boundary.update();
        if (boundary.el.classList.contains(this.REMOVE_CLASS))
          this.boundaries.removeBoundary(i);
      }
    }
  }
}
