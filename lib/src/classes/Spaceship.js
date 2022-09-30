'use strict';
var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
var checkCollision_1 = require('../utils/checkCollision');
var Bullet_1 = __importDefault(require('./Bullet'));
var Entity_1 = __importDefault(require('./Entity'));
var rocket_lightmode_png_1 = __importDefault(
  require('../assets/rocket-lightmode.png')
);
var misc_1 = require('../utils/misc');
var constants_1 = require('../utils/constants');
function easeInCirc(x) {
  return 1 - Math.sqrt(1 - Math.pow(x, 3));
}
var drawRoundRect = function (c, x, y, width, height, radius, fill, stroke) {
  var cornerRadius = {
    upperLeft: 0,
    upperRight: 0,
    lowerLeft: 0,
    lowerRight: 0,
  };
  if (typeof stroke == 'undefined') {
    stroke = true;
  }
  if (typeof radius === 'object') {
    var side = void 0;
    for (side in radius) {
      var radVal = radius[side];
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
exports.spaceshipImg = misc_1.createImage(rocket_lightmode_png_1.default);
var Spaceship = /** @class */ (function (_super) {
  __extends(Spaceship, _super);
  function Spaceship(_a) {
    var x = _a.x,
      y = _a.y;
    var _this =
      _super.call(
        this,
        x,
        y,
        constants_1.SS_DIM.height,
        constants_1.SS_DIM.width
      ) || this;
    _this.speed = 10;
    _this.angle = (90 * Math.PI) / 2;
    _this.shotAvailable = true;
    _this.decelerationTime = 0;
    _this.acceleration = 0.05;
    _this.accelerating = false;
    _this.bullets = [];
    return _this;
  }
  Spaceship.prototype.move = function (dir) {
    this.resetDeceleration();
    switch (dir) {
      case 'left': {
        this.velocity.x -= this.acceleration * this.speed;
        if (this.velocity.x < -this.speed) this.velocity.x = -this.speed;
        break;
      }
      case 'right': {
        this.velocity.x += this.acceleration * this.speed;
        if (this.velocity.x > this.speed) this.velocity.x = this.speed;
        break;
      }
      case 'up': {
        this.velocity.y -= this.acceleration * this.speed;
        if (this.velocity.y < -this.speed) this.velocity.y = -this.speed;
        break;
      }
      case 'down': {
        this.velocity.y += this.acceleration * this.speed;
        if (this.velocity.y > this.speed) this.velocity.y = this.speed;
        break;
      }
    }
  };
  Spaceship.prototype.bounce = function (bounds, boundaries) {
    var _this = this;
    var edges = this.getCorners('with velocity');
    // handle browser edges
    for (var i = 0; i < edges.length; i++) {
      if (!checkCollision_1.checkIfWithinBounds(edges[i], bounds)) {
        this.velocity.x = -this.velocity.x;
        this.velocity.y = -this.velocity.y;
        return;
      }
    }
    // handle element boundaries
    boundaries.forEach(function (boundary) {
      var collision;
      if (boundary.circle) {
        collision = checkCollision_1.checkCollisionBtwnCircleAndRect(
          boundary,
          _this.getCorners('with velocity'),
          _this.getVertices('with velocity')
        );
      } else {
        for (var i = 0; i < edges.length; i++) {
          collision = checkCollision_1.checkShipEdgeCollision(
            edges[i],
            boundary
          );
          if (collision) break;
        }
      }
      if (collision) {
        _this.velocity.x = -_this.velocity.x;
        _this.velocity.y = -_this.velocity.y;
      }
    });
  };
  Spaceship.prototype.updateXPosition = function () {
    this.x += this.velocity.x;
    if (this.x < 0) this.x = 0;
  };
  Spaceship.prototype.updateYPosition = function () {
    this.y += this.velocity.y;
    if (this.y < 0) this.y = 0;
  };
  Spaceship.prototype.shoot = function () {
    if (!this.shotAvailable) return;
    var _a = this.getCenter(),
      xCenter = _a.xCenter,
      yCenter = _a.yCenter;
    var r = this.height / 2;
    var x = r * Math.cos(this.angle + Math.PI / 2) + xCenter;
    var y = r * Math.sin(this.angle + Math.PI / 2) + yCenter;
    this.bullets.push(
      new Bullet_1.default({ x: x, y: y }, { x: x - xCenter, y: y - yCenter })
    );
    this.shotAvailable = false;
  };
  Spaceship.prototype.getCenter = function (withVelocity) {
    var x = withVelocity ? this.x + this.velocity.x : this.x;
    var y = withVelocity ? this.y + this.velocity.y : this.y;
    var xCenter = x + this.width / 2;
    var yCenter = y + this.height / 2;
    return { xCenter: xCenter, yCenter: yCenter };
  };
  Spaceship.prototype.draw = function (c) {
    var _a = this.getCenter(),
      xCenter = _a.xCenter,
      yCenter = _a.yCenter;
    c.setTransform(1, 0, 0, 1, 0, 0);
    c.translate(xCenter, yCenter);
    c.rotate(this.angle);
    c.translate(-xCenter, -yCenter);
    c.drawImage(exports.spaceshipImg, this.x, this.y, this.width, this.height);
    c.setTransform(1, 0, 0, 1, 0, 0);
    if (
      this.accelerating ||
      (this.decelerationTime > 0 && this.decelerationTime < 1)
      // want to show flames as ship is decelerating but not after
    ) {
      this.drawFlames(c);
    }
  };
  Spaceship.prototype.drawFlames = function (c) {
    var _a = this.getCenter(),
      xCenter = _a.xCenter,
      yCenter = _a.yCenter;
    c.setTransform(1, 0, 0, 1, 0, 0);
    c.translate(xCenter, yCenter);
    c.rotate(this.angle);
    c.translate(-xCenter, -yCenter);
    var length =
      Math.max(
        Math.abs(this.velocity.x / this.speed),
        Math.abs(this.velocity.y / this.speed)
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
  };
  Spaceship.prototype.alignToMouse = function (mouse, bounds) {
    if (mouse.x === null || mouse.y === null) return;
    var _a = this.getCenter(),
      xCenter = _a.xCenter,
      yCenter = _a.yCenter;
    var dx = mouse.x - xCenter;
    var dy = mouse.y - yCenter;
    var theta = Math.atan2(dy, dx) - Math.PI / 2;
    var edgesAfterRotation = this.getCorners(undefined, theta);
    for (var i = 0; i < edgesAfterRotation.length; i++) {
      if (!checkCollision_1.checkIfWithinBounds(edgesAfterRotation[i], bounds))
        return;
    }
    this.angle = theta;
  };
  Spaceship.prototype.resetDeceleration = function () {
    this.decelerationTime = 0;
  };
  Spaceship.prototype.decelerate = function () {
    switch (true) {
      case this.decelerationTime < 0.85:
        this.decelerationTime += 0.15;
        break;
      default:
        this.decelerationTime += 0.07;
    }
    if (this.decelerationTime > 1) {
      return;
    }
    var key;
    for (key in this.velocity) {
      this.velocity[key] -=
        easeInCirc(this.decelerationTime) * this.velocity[key];
    }
  };
  Spaceship.prototype.applyInertia = function () {
    var key;
    for (key in this.velocity) {
      this.velocity[key] /= 3;
    }
  };
  Spaceship.prototype.removeBullet = function (id) {
    this.bullets = this.bullets.filter(function (b) {
      return b.id !== id;
    });
  };
  Spaceship.prototype.getCorners = function (withVelocity, angle) {
    if (angle === void 0) {
      angle = this.angle;
    }
    var _a = this.getCenter(withVelocity),
      xCenter = _a.xCenter,
      yCenter = _a.yCenter;
    var x = withVelocity ? this.x + this.velocity.x : this.x;
    var y = withVelocity ? this.y + this.velocity.y : this.y;
    var edges = [
      // topLeft:
      {
        x: x - xCenter,
        y: y - yCenter,
      },
      // bottomLeft:
      {
        x: x - xCenter,
        y: y + this.height - yCenter,
      },
      // topRight:
      {
        x: x + this.width - xCenter,
        y: y - yCenter,
      },
      // bottomRight:
      {
        x: x + this.width - xCenter,
        y: y + this.height - yCenter,
      },
    ];
    var afterRotation = edges.map(function (p) {
      return {
        x: p.x * Math.cos(angle) - p.y * Math.sin(angle) + xCenter,
        y: p.x * Math.sin(angle) + p.y * Math.cos(angle) + yCenter,
      };
    });
    return afterRotation;
  };
  Spaceship.prototype.getVertices = function (withVelocity) {
    var _this = this;
    var _a = this.getCenter(withVelocity),
      xCenter = _a.xCenter,
      yCenter = _a.yCenter;
    var x = withVelocity ? this.x + this.velocity.x : this.x;
    var y = withVelocity ? this.y + this.velocity.y : this.y;
    var vertices = [
      [
        {
          x: x - xCenter,
          y: y - yCenter,
        },
        { x: x - xCenter, y: y + this.height - yCenter },
      ],
      [
        {
          x: x - xCenter,
          y: y - yCenter,
        },
        {
          x: x + this.width - xCenter,
          y: y - yCenter,
        },
      ],
      [
        {
          x: x + this.width - xCenter,
          y: y - yCenter,
        },
        {
          x: x + this.width - xCenter,
          y: y + this.height - yCenter,
        },
      ],
      [
        {
          x: x - xCenter,
          y: y + this.height - yCenter,
        },
        {
          x: x + this.width - xCenter,
          y: y + this.height - yCenter,
        },
      ],
    ].map(function (v) {
      return v.map(function (p) {
        return {
          x:
            p.x * Math.cos(_this.angle) - p.y * Math.sin(_this.angle) + xCenter,
          y:
            p.x * Math.sin(_this.angle) + p.y * Math.cos(_this.angle) + yCenter,
        };
      });
    });
    return vertices;
  };
  return Spaceship;
})(Entity_1.default);
exports.default = Spaceship;
