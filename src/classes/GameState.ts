import { XY } from "../../types/interfaces";
import { Option, Direction, Mouse } from "../../types/types";
import {
  checkCollisionBtwnCircles,
  checkIfInsideRect,
} from "../utils/collision";
import { DIRECTIONS } from "../utils/constants";
import { getTranslateY } from "../utils/misc";
import { BareCircleBoundary, BareRectBoundary } from "./entities/boundaries";
import { BareShootable } from "./entities/Shootable";
import { Spaceship } from "./entities/Spaceship";
import KeyPress from "./KeyPress";
import { BoundaryList } from "./lists/BoundaryList";
import { ShootableList } from "./lists/ShootableList";
import Score from "./Score";

export default class GameState {
  spaceship: Spaceship;
  boundaries: BoundaryList;
  shootables: ShootableList;
  mouse: Mouse;
  keyPress: KeyPress;
  bounds: XY;
  scrollBoundary: { top: number; bottom: number };
  readonly REMOVE_CLASS: string;
  readonly ROOT_EL: HTMLElement;
  score: Score;

  constructor(
    removeClass: string,
    image: ImageBitmap,
    speed: number,
    rootEl: HTMLElement
  ) {
    this.scrollBoundary = {
      // local minima/maxima that triggers a scroll upon contact
      top: window.innerHeight * 0.3,
      bottom: window.innerHeight * 0.7,
    };
    this.boundaries = new BoundaryList();
    this.bounds = {
      x: window.innerWidth,
      y: window.innerHeight,
    };
    this.spaceship = new Spaceship(
      Spaceship.getStartPos(this.boundaries.list),
      image,
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

  updateBounds(dimensions: XY) {
    this.bounds.x = dimensions.x;
    this.bounds.y = dimensions.y;
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
    const inBetweenScrollBoundaries =
      this.spaceship.y + this.spaceship.velocity.y > this.scrollBoundary.top &&
      this.spaceship.y + this.spaceship.velocity.y < this.scrollBoundary.bottom;
    const inFirstScreenGoingUp =
      yPos <= 0 &&
      this.spaceship.y + this.spaceship.velocity.y < this.scrollBoundary.bottom;
    const inLastScreenGoingDown =
      yPos >= distanceFromTopViewportToBottomOfDoc &&
      this.spaceship.y + this.spaceship.velocity.y > this.scrollBoundary.top;
    const belowBottomBoundGoingUp =
      this.spaceship.y > this.scrollBoundary.bottom &&
      this.spaceship.velocity.y < 0;
    const aboveTopBoundGoingDown =
      this.spaceship.y < this.scrollBoundary.top &&
      this.spaceship.velocity.y > 0;

    let amountToShift = 0;
    // bullets need to read this amount to see how much to shift as the root element translateY changes

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
        //if spaceship is above the bottom
        yPos + this.spaceship.velocity.y <
        distanceFromTopViewportToBottomOfDoc
      ) {
        this.ROOT_EL.style.transform = `translateY(${newTranslateVal}px)`;
        amountToShift = this.spaceship.velocity.y;
      } else {
        // need to set the translate value of root element to distanceFromTopViewportToBottomOfDoc bc that's what we read to see if the spaceship can cross the bottom scrollBoundary
        this.ROOT_EL.style.transform = `translateY(${-Math.ceil(
          distanceFromTopViewportToBottomOfDoc - window.scrollY
        )}px)`;
        this.spaceship.updateYPosition();
      }
    } else if (
      //spaceship is going to push against top scrollBoundary
      this.spaceship.y > this.scrollBoundary.top &&
      this.spaceship.y + this.spaceship.velocity.y < this.scrollBoundary.top
    ) {
      const newTranslateVal = translateVal - this.spaceship.velocity.y;
      if (newTranslateVal < window.scrollY) {
        this.ROOT_EL.style.transform = `translateY(${newTranslateVal}px)`;

        amountToShift = this.spaceship.velocity.y;
      } else {
        this.ROOT_EL.style.transform = `translateY(${window.scrollY}px)`;
        this.spaceship.updateYPosition();
      }
    } else if (belowBottomBoundGoingUp || aboveTopBoundGoingDown) {
      this.spaceship.updateYPosition();
    }

    this.spaceship.handleBoundsCollision(this.bounds);

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
        bullet.update(this.bounds);
        if (bullet.status === "dead") this.spaceship.removeBullet(i);
        else if (bullet.status == "alive") {
          for (const shootable of this.shootables.list) {
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

        if (boundary.kind === "circle")
          this.spaceship.handleCollisionWithCircle(boundary);
        else this.spaceship.handleCollisionWithRect(boundary);

        boundary.update();
        if (boundary.el.classList.contains(this.REMOVE_CLASS))
          this.boundaries.removeBoundary(i);
      }
    }
  }
}

export class WebWorkerGameState {
  spaceship: Spaceship;
  score: Score;
  mouse: Mouse;
  keyPress: KeyPress;
  bounds: XY;

  constructor(
    spaceShipConfig: {
      image: ImageBitmap;
      speed: number;
      startPos: XY;
    },
    bounds: XY
  ) {
    this.bounds = bounds;

    this.spaceship = new Spaceship(
      spaceShipConfig.startPos,
      spaceShipConfig.image,
      spaceShipConfig.speed
    );
    this.score = new Score();
    this.mouse = {
      x: null,
      y: null,
    };
    this.keyPress = new KeyPress();
  }

  updateBounds(dimensions: XY) {
    this.bounds.x = dimensions.x;
    this.bounds.y = dimensions.y;
  }

  update(
    scrollY: number,
    rootElTranslateYValue: number,
    distanceFromTopViewportToBottomOfDoc: number,
    boundaries: (BareCircleBoundary | BareRectBoundary)[],
    shootables: BareShootable[]
  ) {
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
    const scrollBoundary = {
      top: this.bounds.y * 0.3,
      bottom: this.bounds.y * 0.7,
    };
    const yPosOfPage = Math.floor(rootElTranslateYValue * -1) + scrollY;
    const inBetweenScrollBoundaries =
      this.spaceship.y + this.spaceship.velocity.y > scrollBoundary.top &&
      this.spaceship.y + this.spaceship.velocity.y < scrollBoundary.bottom;
    const inFirstScreenGoingUp =
      yPosOfPage <= 0 &&
      this.spaceship.y + this.spaceship.velocity.y < scrollBoundary.bottom;
    const inLastScreenGoingDown =
      yPosOfPage >= distanceFromTopViewportToBottomOfDoc &&
      this.spaceship.y + this.spaceship.velocity.y > scrollBoundary.top;
    const belowBottomBoundGoingUp =
      this.spaceship.y > scrollBoundary.bottom && this.spaceship.velocity.y < 0;
    const aboveTopBoundGoingDown =
      this.spaceship.y < scrollBoundary.top && this.spaceship.velocity.y > 0;
    const pushingAgainstBottomBoundary =
      this.spaceship.y < scrollBoundary.bottom &&
      this.spaceship.y + this.spaceship.velocity.y > scrollBoundary.bottom;
    const pushingAgainstTopBoundary =
      this.spaceship.y > scrollBoundary.top &&
      this.spaceship.y + this.spaceship.velocity.y < scrollBoundary.top;

    let amountToShift = 0;
    // bullets need to read this amount to see how much to shift as the root element translateY changes

    let newRootElTranslateValue: Option<number> = null;
    if (
      inBetweenScrollBoundaries ||
      inFirstScreenGoingUp ||
      inLastScreenGoingDown
    ) {
      this.spaceship.updateYPosition();
    } else if (pushingAgainstBottomBoundary) {
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
        newRootElTranslateValue = -Math.ceil(
          distanceFromTopViewportToBottomOfDoc - scrollY
        );

        this.spaceship.updateYPosition();
      }
    } else if (pushingAgainstTopBoundary) {
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
    this.spaceship.handleBoundsCollision(this.bounds);

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
        bullet.update(this.bounds);
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

      if (i < boundaries.length) {
        const boundary = boundaries[i];

        if (boundary.kind === "circle")
          this.spaceship.handleCollisionWithCircle(boundary);
        else this.spaceship.handleCollisionWithRect(boundary);
      }
    }

    return {
      shootablesHitAxis,
      newRootElTranslateValue,
    };
  }
}
