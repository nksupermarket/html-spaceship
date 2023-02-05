import { MouseInterface, XY } from '../../types/interfaces';
import { Axis, Direction } from '../../types/types';
import { getCollisionBetweenRectAndCircle } from '../utils/collision';
import { SS_DIMENSIONS } from '../utils/constants';
import { createImage, getExtremities } from '../utils/misc';
import { CircleBoundary } from './boundaries';
import Bullet from './Bullet';
import Entity from './Entity';
import Polygon from './Polygon';

function easeInCirc(x: number): number {
  return 1 - Math.sqrt(1 - Math.pow(x, 3));
}

const drawRoundRect = function (
  c: CanvasRenderingContext2D,
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
  if (typeof stroke == 'undefined') {
    stroke = true;
  }
  if (typeof radius === 'object') {
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

type DecelerateScalars = Record<Axis, number>;
export default class Spaceship extends Entity {
  angle: number;
  shotAvailable: boolean;
  bullets: Bullet[];
  decelerateScalars: DecelerateScalars;
  readonly ACCELERATION_RATE: number;
  accelerating: boolean;
  readonly MAX_SPEED: number;
  velocity: XY;
  readonly IMAGE: HTMLImageElement;
  readonly CONVEX_POLYGONS: Polygon[];
  readonly BOUNDING_BOX: Polygon;

  constructor({ x, y }: XY, theme: 'dark' | 'light', speed: number) {
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
    this.IMAGE = createImage(
      theme === 'light'
        ? require('../assets/optimized/rocket-lightmode.png').default
        : require('../assets/optimized/rocket-darkmode.png').default
    );
    this.CONVEX_POLYGONS = this.getPolygons();
    this.BOUNDING_BOX = new Polygon([
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
    ]);
  }

  move(dir: Direction) {
    switch (dir) {
      case 'left': {
        this.resetDeceleration('x');

        this.velocity.x -= this.ACCELERATION_RATE * this.MAX_SPEED;
        if (this.velocity.x < -this.MAX_SPEED)
          this.velocity.x = -this.MAX_SPEED;
        break;
      }
      case 'right': {
        this.resetDeceleration('x');

        this.velocity.x += this.ACCELERATION_RATE * this.MAX_SPEED;
        if (this.velocity.x > this.MAX_SPEED) this.velocity.x = this.MAX_SPEED;
        break;
      }
      case 'up': {
        this.resetDeceleration('y');

        this.velocity.y -= this.ACCELERATION_RATE * this.MAX_SPEED;
        if (this.velocity.y < -this.MAX_SPEED)
          this.velocity.y = -this.MAX_SPEED;
        break;
      }
      case 'down': {
        this.resetDeceleration('y');

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
        case 'top': {
          if (value < 0) {
            this.updateYPosition(0 - value);
            this.velocity.y = -this.velocity.y;
          }
          break;
        }
        case 'left': {
          if (value < 0) {
            this.updateXPosition(0 - value);
            this.velocity.x = -this.velocity.x;
          }
          break;
        }
        case 'bottom': {
          if (value > bounds.y) {
            this.updateYPosition(bounds.y - value);
            this.velocity.y = -this.velocity.y;
          }
          break;
        }
        case 'right': {
          if (value > bounds.x) {
            this.updateXPosition(bounds.x - value);
            this.velocity.x = -this.velocity.x;
          }
          break;
        }
      }
    }
  }

  handleCollisionWithCircle(boundary: CircleBoundary) {
    const collision = getCollisionBetweenRectAndCircle(
      boundary.getCenter(),
      boundary.radius,
      this.BOUNDING_BOX.vertices
    );
    if (!collision) return;

    const { correction, normal } = collision;

    this.updateXPosition(correction.x);
    this.updateYPosition(correction.y);

    // explanation of how collision is resolved https://stackoverflow.com/a/4523556/6815335
    normal.normalize();
    const distanceAlongNormal = normal.getDotProduct(this.velocity);

    this.velocity.x -= 2.0 * distanceAlongNormal * normal.x;
    this.velocity.y -= 2.0 * distanceAlongNormal * normal.y;
  }

  // handleCollisionWithRect(boundary: RectBoundary) {
  //   function checkPointInsideRect(point: XY, rect: Entity) {
  //     const collideY = rect.y <= point.y && rect.y + rect.height > point.y;
  //     const collideX = rect.x <= point.x && rect.x + rect.width > point.x;

  //     return collideY && collideX;
  //   }
  //   function getCollisionSizeAndDirection(point: XY, rect: Entity) {
  //     // find whether the edge the ship collided with is a horizontal edge or vertical by comparing how deep the ship is on x and y axis. Deeper on x-axis means the ship hit a horizontal edge, deeper on y-axis means the ship hit a vertical edge
  //     const sizeOfYPenetration = Math.min(
  //       point.y - rect.y,
  //       rect.y + rect.height - point.y
  //     );
  //     const sizeOfXPenetration = Math.min(
  //       point.x - rect.x,
  //       rect.x + rect.width - point.x
  //     );
  //     return sizeOfYPenetration > sizeOfXPenetration
  //       ? {
  //           axis: 'x',
  //           amount: sizeOfXPenetration,
  //         }
  //       : {
  //           axis: 'y',
  //           amount: sizeOfYPenetration,
  //         };
  //   }
  //   let collision = null;
  //   for (let i = 0; i < this.vertices.length; i++) {
  //     const shipInsideBoundary = checkPointInsideRect(
  //       this.vertices[i],
  //       boundary
  //     );

  //     if (shipInsideBoundary) {
  //       collision = getCollisionSizeAndDirection(this.vertices[i], boundary);
  //       break;
  //     }
  //   }
  //   if (!collision) return;
  //   switch (collision.axis) {
  //     case 'x':
  //       this.updateXPosition(
  //         this.velocity.x > 0 ? -collision.amount : collision.amount
  //       );
  //       this.velocity.x = -this.velocity.x;
  //       return;
  //     case 'y':
  //       this.updateYPosition(
  //         this.velocity.y > 0 ? -collision.amount : collision.amount
  //       );
  //       this.velocity.y = -this.velocity.y;
  //       return;

  //     default:
  //       return;
  //   }
  // }

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
    const { x: xCenter, y: yCenter } = this.getCenter();

    const r = this.height / 2;
    const x = r * Math.cos(this.angle + Math.PI / 2) + xCenter;
    const y = r * Math.sin(this.angle + Math.PI / 2) + yCenter;
    this.bullets.push(new Bullet({ x, y }, { x: x - xCenter, y: y - yCenter }));

    this.shotAvailable = false;
  }

  getCenter(): XY {
    const x = this.x + this.width / 2;
    const y = this.y + this.height / 2;

    return { x, y };
  }

  draw(c: CanvasRenderingContext2D) {
    c.moveTo(this.BOUNDING_BOX.vertices[0].x, this.BOUNDING_BOX.vertices[0].y);
    c.lineTo(this.BOUNDING_BOX.vertices[1].x, this.BOUNDING_BOX.vertices[1].y);
    c.lineTo(this.BOUNDING_BOX.vertices[3].x, this.BOUNDING_BOX.vertices[3].y);
    c.lineTo(this.BOUNDING_BOX.vertices[2].x, this.BOUNDING_BOX.vertices[2].y);
    c.stroke();

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

  drawFlames(c: CanvasRenderingContext2D) {
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

    c.fillStyle = '#F18805';
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
    this.bullets.slice(i, 1);
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

    return [new Polygon(headAndBody), new Polygon(wing), new Polygon(booster)];
  }

  // getEdges() {
  //   const { xCenter, yCenter } = this.getCenter();

  //   const x = this.x;
  //   const y = this.y;

  //   const edges = [
  //     [
  //       {
  //         x: x - xCenter,
  //         y: y - yCenter,
  //       },
  //       { x: x - xCenter, y: y + this.height - yCenter },
  //     ],
  //     [
  //       {
  //         x: x - xCenter,
  //         y: y - yCenter,
  //       },
  //       {
  //         x: x + this.width - xCenter,
  //         y: y - yCenter,
  //       },
  //     ],
  //     [
  //       {
  //         x: x + this.width - xCenter,
  //         y: y - yCenter,
  //       },
  //       {
  //         x: x + this.width - xCenter,
  //         y: y + this.height - yCenter,
  //       },
  //     ],
  //     [
  //       {
  //         x: x - xCenter,
  //         y: y + this.height - yCenter,
  //       },
  //       {
  //         x: x + this.width - xCenter,
  //         y: y + this.height - yCenter,
  //       },
  //     ],
  //   ].map((v) =>
  //     v.map((p) => ({
  //       x: p.x * Math.cos(this.angle) - p.y * Math.sin(this.angle) + xCenter,
  //       y: p.x * Math.sin(this.angle) + p.y * Math.cos(this.angle) + yCenter,
  //     }))
  //   );

  //   return edges;
  // }
}
