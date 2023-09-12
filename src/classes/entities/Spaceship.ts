import { MouseInterface, XY } from "../../../types/interfaces";
import { Axis, Direction } from "../../../types/types";
import {
  checkIfInsideRect,
  getCollisionBtwnPolygonAndCircle,
  getCollisionBtwnPolygons,
} from "../../utils/collision";
import { SS_DIMENSIONS } from "../../utils/constants";
import { getExtremities } from "../../utils/misc";
import Polygon from "../geometric_objects/Polygon";
import Boundary, { BareCircleBoundary, BareRectBoundary } from "./boundaries";
import Bullet from "./Bullet";
import Entity from "./Entity";

function easeInCirc(x: number): number {
  return 1 - Math.sqrt(1 - Math.pow(x, 3));
}

const drawRoundRect = function (
  c: CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: {
    upperLeft?: number;
    upperRight?: number;
    lowerLeft?: number;
    lowerRight?: number;
  },
  fill: boolean,
  stroke: boolean
) {
  const cornerRadius = {
    upperLeft: 0,
    upperRight: 0,
    lowerLeft: 0,
    lowerRight: 0,
  };
  if (typeof stroke == "undefined") {
    stroke = true;
  }
  if (typeof radius === "object") {
    let side: keyof typeof radius;
    for (side in radius) {
      const radVal = radius[side];
      if (radVal === undefined) return;
      cornerRadius[side] = radVal;
    }
  }

  c.beginPath();
  c.moveTo(x + cornerRadius.upperLeft, y);
  c.lineTo(x + width - cornerRadius.upperRight, y);
  c.quadraticCurveTo(x + width, y, x + width, y + cornerRadius.upperRight);
  c.lineTo(x + width, y + height - cornerRadius.lowerRight);
  c.quadraticCurveTo(
    x + width,
    y + height,
    x + width - cornerRadius.lowerRight,
    y + height
  );
  c.lineTo(x + cornerRadius.lowerLeft, y + height);
  c.quadraticCurveTo(x, y + height, x, y + height - cornerRadius.lowerLeft);
  c.lineTo(x, y + cornerRadius.upperLeft);
  c.quadraticCurveTo(x, y, x + cornerRadius.upperLeft, y);
  c.closePath();
  if (fill) {
    c.fill();
  }
};

const DISSIPATION_FACTOR = 0.95;

type DecelerateScalars = Record<Axis, number>;
export type SpaceshipEventState = Pick<
  Spaceship,
  "shotAvailable" | "accelerating"
>;
export class Spaceship extends Entity {
  angle: number;
  shotAvailable: boolean;
  bullets: Bullet[];
  decelerateScalars: DecelerateScalars;
  readonly ACCELERATION_RATE: number;
  accelerating: boolean;
  readonly MAX_SPEED: number;
  velocity: XY;
  readonly IMAGE: ImageBitmap;
  readonly CONVEX_POLYGONS: Polygon[];
  readonly BOUNDING_BOX: Polygon;
  colliding: boolean;

  constructor({ x, y }: XY, image: ImageBitmap, speed: number) {
    super(x, y, SS_DIMENSIONS.height, SS_DIMENSIONS.width);
    this.MAX_SPEED = speed;
    this.angle = (90 * Math.PI) / 2;
    this.shotAvailable = true;
    this.decelerateScalars = {
      x: 0,
      y: 0,
    };
    this.ACCELERATION_RATE = 0.1;
    this.accelerating = false;
    this.bullets = [];
    this.velocity = { x: 0, y: 0 };
    this.IMAGE = image;
    this.CONVEX_POLYGONS = this.getPolygons();
    this.BOUNDING_BOX = new Polygon(
      [
        // topLeft:
        {
          x: x,
          y: y,
        },
        // bottomLeft:
        {
          x: x,
          y: y + this.height,
        },
        // bottomRight:
        {
          x: x + this.width,
          y: y + this.height,
        }, // topRight:
        {
          x: x + this.width,
          y: y,
        },
      ],
      { x: this.x + this.width / 2, y: this.y + this.height / 2 }
    );
    this.colliding = false;
  }

  static getStartPos(boundaries: Boundary[]) {
    function getRdmPos() {
      return {
        x: Math.floor(
          Math.random() * (window.innerWidth - SS_DIMENSIONS.width)
        ),
        y: Math.floor(
          Math.random() * (window.innerHeight * 0.4 - SS_DIMENSIONS.height) +
            window.innerHeight * 0.3
        ),
      };
    }

    let { x, y } = getRdmPos();
    let spaceship = new Entity(x, y, SS_DIMENSIONS.height, SS_DIMENSIONS.width);

    let inEmptySpace = false;
    while (!inEmptySpace) {
      for (let i = 0; i < boundaries.length; i++) {
        if (checkIfInsideRect(spaceship, boundaries[i])) {
          let { x, y } = getRdmPos();
          spaceship = new Entity(
            x,
            y,
            SS_DIMENSIONS.height,
            SS_DIMENSIONS.width
          );
          continue;
        }
      }

      inEmptySpace = true;
    }

    return {
      x: spaceship.x,
      y: spaceship.y,
    };
  }

  move(dir: Direction) {
    switch (dir) {
      case "left": {
        this.resetDeceleration("x");

        this.velocity.x -= this.ACCELERATION_RATE * this.MAX_SPEED;
        if (this.velocity.x < -this.MAX_SPEED)
          this.velocity.x = -this.MAX_SPEED;
        break;
      }
      case "right": {
        this.resetDeceleration("x");

        this.velocity.x += this.ACCELERATION_RATE * this.MAX_SPEED;
        if (this.velocity.x > this.MAX_SPEED) this.velocity.x = this.MAX_SPEED;
        break;
      }
      case "up": {
        this.resetDeceleration("y");

        this.velocity.y -= this.ACCELERATION_RATE * this.MAX_SPEED;
        if (this.velocity.y < -this.MAX_SPEED)
          this.velocity.y = -this.MAX_SPEED;
        break;
      }
      case "down": {
        this.resetDeceleration("y");

        this.velocity.y += this.ACCELERATION_RATE * this.MAX_SPEED;
        if (this.velocity.y > this.MAX_SPEED) this.velocity.y = this.MAX_SPEED;
        break;
      }
    }
  }

  handleBoundsCollision(bounds: XY) {
    const extremities = getExtremities(this.BOUNDING_BOX.vertices);

    for (const [key, value] of Object.entries(extremities)) {
      switch (key) {
        case "top": {
          if (value < 0) {
            this.updateYPosition(0 - value);
            this.velocity.y = -this.velocity.y * DISSIPATION_FACTOR;
            this.resetDeceleration("x");
            this.resetDeceleration("y");
          }
          break;
        }
        case "left": {
          if (value < 0) {
            this.updateXPosition(0 - value);
            this.velocity.x = -this.velocity.x * DISSIPATION_FACTOR;
            this.resetDeceleration("x");
            this.resetDeceleration("y");
          }
          break;
        }
        case "bottom": {
          if (value > bounds.y) {
            this.updateYPosition(bounds.y - value);
            this.velocity.y = -this.velocity.y * DISSIPATION_FACTOR;
            this.resetDeceleration("x");
            this.resetDeceleration("y");
          }
          break;
        }
        case "right": {
          if (value > bounds.x) {
            this.updateXPosition(bounds.x - value);
            this.velocity.x = -this.velocity.x * DISSIPATION_FACTOR;
            this.resetDeceleration("x");
            this.resetDeceleration("y");
          }
          break;
        }
      }
    }
  }

  handleCollisionWithCircle(boundary: BareCircleBoundary) {
    if (
      boundary.height === 0 ||
      this.x + 200 < boundary.x ||
      this.x > boundary.x + boundary.width + 200 ||
      this.y + 200 < boundary.y ||
      this.y > boundary.y + boundary.height + 200
    )
      return;
    let collision;
    for (const polygon of this.CONVEX_POLYGONS) {
      collision = getCollisionBtwnPolygonAndCircle(polygon, boundary);
      if (collision) break;
    }
    if (!collision) return;
    const { displacement, collisionNormal } = collision;
    this.updateXPosition(displacement.x);
    this.updateYPosition(displacement.y);
    // explanation of how collision is resolved https://stackoverflow.com/a/4523556/6815335
    collisionNormal.normalize();
    const distanceAlongNormal = collisionNormal.dot(this.velocity);

    this.velocity.x -= 2.0 * distanceAlongNormal * collisionNormal.x;
    this.velocity.y -= 2.0 * distanceAlongNormal * collisionNormal.y;
    this.velocity.x *= DISSIPATION_FACTOR;
    this.velocity.y *= DISSIPATION_FACTOR;

    this.resetDeceleration("x");
    this.resetDeceleration("y");
  }

  handleCollisionWithRect(boundary: BareRectBoundary) {
    if (
      boundary.height === 0 ||
      this.x + 200 < boundary.x ||
      this.x > boundary.x + boundary.width + 200 ||
      this.y + 200 < boundary.y ||
      this.y > boundary.y + boundary.height + 200
    )
      return;
    let collision;
    for (const polygon of this.CONVEX_POLYGONS) {
      collision = getCollisionBtwnPolygons(polygon, boundary);
      if (collision) break;
    }

    if (!collision) return;

    const { displacement, collisionNormal } = collision;

    this.updateXPosition(-displacement.x);
    this.updateYPosition(-displacement.y);

    if (Math.abs(collisionNormal!.y) > Math.abs(collisionNormal!.x))
      this.velocity.y = -this.velocity.y * DISSIPATION_FACTOR;
    else this.velocity.x = -this.velocity.x * DISSIPATION_FACTOR;

    this.resetDeceleration("x");
    this.resetDeceleration("y");
  }

  updateXPosition(shift = this.velocity.x) {
    this.x += shift;
    this.BOUNDING_BOX.updateXPosition(shift);

    for (const polygon of this.CONVEX_POLYGONS) {
      polygon.updateXPosition(shift);
    }
  }

  updateYPosition(shift = this.velocity.y) {
    this.y += shift;

    this.BOUNDING_BOX.updateYPosition(shift);

    for (const polygon of this.CONVEX_POLYGONS) {
      polygon.updateYPosition(shift);
    }
  }

  shoot() {
    if (!this.shotAvailable) return;
    const center = this.getCenter();

    const r = this.height / 2;
    const x = Math.cos(this.angle + Math.PI / 2);
    const y = Math.sin(this.angle + Math.PI / 2);
    this.bullets.push(
      new Bullet(
        { x: r * x + center.x, y: r * y + center.y },
        {
          x,
          y,
        }
      )
    );

    this.shotAvailable = false;
  }

  getCenter(): XY {
    const x = this.x + this.width / 2;
    const y = this.y + this.height / 2;

    return { x, y };
  }

  draw(c: CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D) {
    const { x: xCenter, y: yCenter } = this.getCenter();
    c.setTransform(1, 0, 0, 1, 0, 0);
    c.translate(xCenter, yCenter);
    c.rotate(this.angle);
    c.translate(-xCenter, -yCenter);
    c.drawImage(this.IMAGE, this.x, this.y, this.width, this.height);
    c.setTransform(1, 0, 0, 1, 0, 0);

    if (
      this.accelerating ||
      (this.decelerateScalars.x > 0 && this.decelerateScalars.x < 1) ||
      (this.decelerateScalars.y > 0 && this.decelerateScalars.y < 1)
      // want to show flames as ship is decelerating but not after
    ) {
      this.drawFlames(c);
    }
  }

  drawFlames(c: CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D) {
    const { x: xCenter, y: yCenter } = this.getCenter();

    c.setTransform(1, 0, 0, 1, 0, 0);
    c.translate(xCenter, yCenter);
    c.rotate(this.angle);
    c.translate(-xCenter, -yCenter);

    const length =
      Math.max(
        Math.abs(this.velocity.x / this.MAX_SPEED),
        Math.abs(this.velocity.y / this.MAX_SPEED)
      ) * 40;

    c.fillStyle = "#F18805";
    drawRoundRect(
      c,
      this.x + 27,
      this.y - 5 - length / 1.5,
      3,
      length / 1.5,
      {
        upperLeft: 2,
        upperRight: 2,
      },
      true,
      true
    );
    drawRoundRect(
      c,
      this.x + 19,
      this.y - 5 - length / 1.5,
      3,
      length / 1.5,
      {
        upperLeft: 2,
        upperRight: 2,
      },
      true,
      true
    );
    drawRoundRect(
      c,
      this.x + 23,
      this.y - 5 - length,
      3,
      length,
      {
        upperLeft: 2,
        upperRight: 2,
      },
      true,
      true
    );

    c.setTransform(1, 0, 0, 1, 0, 0);
  }

  alignToMouse(mouse: MouseInterface) {
    if (mouse.x === null || mouse.y === null) return;
    const center = this.getCenter();

    const dx = mouse.x - center.x;
    const dy = mouse.y - center.y;
    // subtract 90deg bc the ship starts at 90deg
    const theta = Math.atan2(dy, dx) - Math.PI / 2;

    this.angle = theta;

    this.BOUNDING_BOX.rotate(theta, center);
    for (const polygon of this.CONVEX_POLYGONS) {
      polygon.rotate(theta, center);
    }
  }

  resetDeceleration(axis: Axis) {
    this.decelerateScalars[axis] = 0;
  }

  decelerate(axis: Axis) {
    if (this.decelerateScalars[axis] > 0.92) {
      return;
    }
    if (this.decelerateScalars[axis] < 0.92)
      this.decelerateScalars[axis] += 0.05;

    this.velocity[axis] -=
      easeInCirc(this.decelerateScalars[axis]) * this.velocity[axis];
  }

  removeBullet(i: number) {
    this.bullets.splice(i, 1);
  }

  getVerticesBoundingBox(): XY[] {
    const x = this.x;
    const y = this.y;

    return [
      // topLeft:
      {
        x: x,
        y: y,
      },
      // bottomLeft:
      {
        x: x,
        y: y + this.height,
      },
      // topRight:
      {
        x: x + this.width,
        y: y,
      },
      // bottomRight:
      {
        x: x + this.width,
        y: y + this.height,
      },
    ];
  }

  getPolygons() {
    const tip = {
      x: (this.x + this.x + this.width) / 2,
      y: this.y + this.height,
    };

    const headEndLeft = { x: tip.x - 12, y: this.y + this.height - 33 };
    const headEndRight = { x: tip.x + 12, y: this.y + this.height - 33 };
    const wingLeftBottom = {
      x: this.x,
      y: this.y + 10,
    };
    const wingRightBottom = {
      x: this.x + this.width,
      y: this.y + 10,
    };
    const wingLeftTop = {
      x: this.x,
      y: wingLeftBottom.y + 30,
    };
    const wingRightTop = {
      x: this.x + this.width,
      y: wingLeftBottom.y + 30,
    };
    const bodyEndLeft = {
      x: headEndLeft.x,
      y: wingLeftTop.y,
    };
    const bodyEndRight = {
      x: headEndRight.x,
      y: wingLeftTop.y,
    };
    const boosterLeftBottom = {
      x: bodyEndLeft.x,
      y: this.y,
    };
    const boosterRightBottom = {
      x: bodyEndRight.x,
      y: this.y,
    };
    const boosterLeftTop = {
      x: bodyEndLeft.x,
      y: wingLeftBottom.y,
    };
    const boosterRightTop = {
      x: bodyEndRight.x,
      y: wingRightBottom.y,
    };

    const headAndBody: XY[] = [
      headEndRight,
      tip,
      headEndLeft,
      bodyEndLeft,
      bodyEndRight,
    ];
    const wing = [wingLeftTop, wingLeftBottom, wingRightBottom, wingRightTop];
    const booster = [
      boosterLeftTop,
      boosterLeftBottom,
      boosterRightBottom,
      boosterRightTop,
    ];

    return [
      new Polygon(headAndBody, {
        x: (headEndLeft.x + headEndRight.x) / 2,
        y: tip.y - (tip.y - bodyEndLeft.y) / 2,
      }),
      new Polygon(wing, {
        x: (wingLeftTop.x + wingRightTop.x) / 2,
        y: (wingLeftTop.y + wingLeftBottom.y) / 2,
      }),
      new Polygon(booster, {
        x: (boosterLeftTop.x + boosterRightTop.x) / 2,
        y: (boosterLeftTop.y + boosterRightBottom.y) / 2,
      }),
    ];
  }
}
