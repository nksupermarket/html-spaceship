import { XY } from "../../../types/interfaces";
import { Direction, Mouse } from "../../../types/types";
import {
  checkCollisionBtwnCircles,
  checkIfInsideRect,
} from "../../utils/collision";
import { DIRECTIONS } from "../../utils/constants";
import { BareCircleBoundary, BareRectBoundary } from "../boundaries";
import KeyPress from "../KeyPress";
import Score from "../Score";
import { BareShootable } from "../Shootable";
import Spaceship from "../Spaceship";

const bounds = {
  x: window.innerWidth,
  y: window.innerHeight,
};
export class WebWorkerGameState {
  spaceship: Spaceship;
  scrollBoundary: { top: number; bottom: number };
  score: Score;

  constructor(
    spaceShipConfig: {
      theme: "light" | "dark";
      speed: number;
      startPos: XY;
    },
    scrollBoundary: { top: number; bottom: number }
  ) {
    // local minima/maxima that triggers a scroll upon contact
    this.scrollBoundary = scrollBoundary;

    this.spaceship = new Spaceship(
      spaceShipConfig.startPos,
      spaceShipConfig.theme,
      spaceShipConfig.speed
    );
    this.score = new Score();
  }

  update(
    mouse: Mouse,
    keyPress: KeyPress,
    rootElTranslateYValue: number,
    distanceFromTopViewportToBottomOfDoc: number,
    yPosOfPage: number,
    scrollY: number,
    shootables: BareShootable[],
    boundaries: (BareCircleBoundary | BareRectBoundary)[]
  ) {
    this.spaceship.alignToMouse(mouse);
    // handle key press
    let dir: Direction;
    let xAxisPressed = false;
    let yAxisPressed = false;
    for (dir of DIRECTIONS) {
      if (keyPress.keys[dir].pressed) {
        this.spaceship.move(dir);
        if (dir === "right" || dir === "left") xAxisPressed = true;
        else yAxisPressed = true;
      }
    }
    if (!yAxisPressed) this.spaceship.decelerate("y");
    if (!xAxisPressed) this.spaceship.decelerate("x");

    if (keyPress.keys.click.pressed) this.spaceship.shoot();

    // handle scroll
    const inBetweenScrollBoundaries =
      this.spaceship.y + this.spaceship.velocity.y > this.scrollBoundary.top &&
      this.spaceship.y + this.spaceship.velocity.y < this.scrollBoundary.bottom;
    const inFirstScreenGoingUp =
      yPosOfPage <= 0 &&
      this.spaceship.y + this.spaceship.velocity.y < this.scrollBoundary.bottom;
    const inLastScreenGoingDown =
      yPosOfPage >= distanceFromTopViewportToBottomOfDoc &&
      this.spaceship.y + this.spaceship.velocity.y > this.scrollBoundary.top;
    const belowBottomBoundGoingUp =
      this.spaceship.y > this.scrollBoundary.bottom &&
      this.spaceship.velocity.y < 0;
    const aboveTopBoundGoingDown =
      this.spaceship.y < this.scrollBoundary.top &&
      this.spaceship.velocity.y > 0;

    let amountToShift = 0;
    // bullets need to read this amount to see how much to shift as the root element translateY changes

    let newRootElTranslateValue = 0;
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
      if (
        //if spaceship is above the bottom
        yPosOfPage + this.spaceship.velocity.y <
        distanceFromTopViewportToBottomOfDoc
      ) {
        newRootElTranslateValue =
          rootElTranslateYValue - this.spaceship.velocity.y;
        amountToShift = this.spaceship.velocity.y;
      } else {
        // need to set the translate value of root element to distanceFromTopViewportToBottomOfDoc bc that's what we read to see if the spaceship can cross the bottom scrollBoundary
        newRootElTranslateValue =
          distanceFromTopViewportToBottomOfDoc - scrollY;
        this.spaceship.updateYPosition();
      }
    } else if (
      //spaceship is going to push against top scrollBoundary
      this.spaceship.y > this.scrollBoundary.top &&
      this.spaceship.y + this.spaceship.velocity.y < this.scrollBoundary.top
    ) {
      newRootElTranslateValue =
        rootElTranslateYValue - this.spaceship.velocity.y;
      if (newRootElTranslateValue < scrollY) {
        amountToShift = this.spaceship.velocity.y;
      } else {
        newRootElTranslateValue = scrollY;
        this.spaceship.updateYPosition();
      }
    } else if (belowBottomBoundGoingUp || aboveTopBoundGoingDown) {
      this.spaceship.updateYPosition();
    }

    this.spaceship.handleBoundsCollision(bounds);

    this.spaceship.updateXPosition();

    //update state
    this.score.updateDisplay();
    let shootablesHitAxis = Array(shootables.length).fill(undefined);
    for (
      let i = Math.max(
        shootables.length,
        boundaries.length,
        this.spaceship.bullets.length
      );
      i >= 0;
      i--
    ) {
      if (i < this.spaceship.bullets.length) {
        const bullet = this.spaceship.bullets[i];
        bullet.y -= amountToShift;
        bullet.update(bounds);
        console.log(bullet.status);
        if (bullet.status === "dead") this.spaceship.removeBullet(i);
        else if (bullet.status == "alive") {
          for (const j in shootables) {
            const shootable = shootables[j];
            const collision = shootable.circle
              ? checkCollisionBtwnCircles(shootable, bullet)
              : checkIfInsideRect(shootable, bullet);
            const axis =
              Math.abs(bullet.velocity.y) > Math.abs(bullet.velocity.x)
                ? "y"
                : "x";
            if (collision) {
              bullet.onHit();
              shootablesHitAxis[j] = axis;
            }
          }
        }
      }
    }
  }
}
