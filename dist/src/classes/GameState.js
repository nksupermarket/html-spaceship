"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Spaceship_1 = __importDefault(require("./Spaceship"));
var constants_1 = require("../utils/constants");
var KeyPress_1 = __importDefault(require("./KeyPress"));
var BoundaryList_1 = __importDefault(require("./BoundaryList"));
var ShootableList_1 = __importDefault(require("./ShootableList"));
var checkCollision_1 = require("../utils/checkCollision");
var misc_1 = require("../utils/misc");
var GameState = /** @class */ (function () {
    function GameState(startPos) {
        if (startPos === void 0) { startPos = {
            y: window.innerHeight / 2,
            x: window.innerWidth / 2,
        }; }
        this.spaceship = new Spaceship_1.default(startPos);
        this.scrollSpeed = 0;
        this.scrollBoundary = {
            top: window.innerHeight * 0.3,
            bottom: window.innerHeight * 0.7,
        };
        this.boundaries = new BoundaryList_1.default();
        this.shootables = new ShootableList_1.default();
        this.keyPress = new KeyPress_1.default();
        this.mouse = {
            x: null,
            y: null,
        };
    }
    GameState.prototype.update = function () {
        var _this = this;
        this.spaceship.alignToMouse(this.mouse, {
            x: window.innerWidth,
            y: window.innerHeight,
        });
        // handle key press
        var keyPressed = false;
        var dir;
        for (var _i = 0, DIRECTIONS_1 = constants_1.DIRECTIONS; _i < DIRECTIONS_1.length; _i++) {
            dir = DIRECTIONS_1[_i];
            if (this.keyPress.keys[dir].pressed) {
                keyPressed = true;
                this.spaceship.move(dir);
                this.spaceship.resetDeceleration();
                if (dir === 'up')
                    this.scrollSpeed = 0;
            }
        }
        if (this.keyPress.keys.click.pressed)
            this.spaceship.shoot();
        // handle spaceship running into boundaries
        this.spaceship.bounce({ x: window.innerWidth, y: window.innerHeight }, this.boundaries.list);
        // handle scroll
        function shift(translateVal) {
            var _this = this;
            document.body.style.transform = "translateY(" + translateVal + "px)";
            this.shootables.list.forEach(function (el) {
                el.y -= _this.spaceship.velocity.y;
            });
            this.boundaries.list.forEach(function (el) {
                el.y -= _this.spaceship.velocity.y;
            });
            this.spaceship.bullets.forEach(function (b) {
                b.y -= _this.spaceship.velocity.y;
            });
        }
        if (this.spaceship.y < this.scrollBoundary.bottom &&
            this.spaceship.y + this.spaceship.velocity.y > this.scrollBoundary.bottom) {
            var translateVal_1 = misc_1.getTranslateY(document.body) - this.spaceship.velocity.y;
            if (Math.abs(translateVal_1) <
                document.documentElement.scrollHeight - window.innerHeight) {
                shift.call(this, translateVal_1);
            }
        }
        if (this.spaceship.y > this.scrollBoundary.top &&
            this.spaceship.y + this.spaceship.velocity.y < this.scrollBoundary.top) {
            var translateVal_2 = misc_1.getTranslateY(document.body) - this.spaceship.velocity.y;
            if (translateVal_2 < 0) {
                shift.call(this, translateVal_2);
            }
        }
        var translateVal = Math.floor(Math.abs(misc_1.getTranslateY(document.body)));
        if (
        // spaceship is in between scrollBoundaries
        this.spaceship.y + this.spaceship.velocity.y > this.scrollBoundary.top &&
            this.spaceship.y + this.spaceship.velocity.y < this.scrollBoundary.bottom) {
            this.spaceship.updateYPosition();
        }
        else if (
        // when we are on top of the page, we want to be able to go beyond scrollBoundary.top
        translateVal < 30 &&
            this.spaceship.y + this.spaceship.velocity.y < this.scrollBoundary.bottom) {
            this.spaceship.updateYPosition();
        }
        else if (
        // when we are on bottom of page, we want to be able to go beyond scrollBoundary.bottom
        translateVal + 30 >
            document.documentElement.scrollHeight - window.innerHeight &&
            this.spaceship.y + this.spaceship.velocity.y > this.scrollBoundary.top) {
            this.spaceship.updateYPosition();
        }
        this.spaceship.updateXPosition();
        // handle deceleration
        if (!keyPressed &&
            (this.spaceship.velocity.x || this.spaceship.velocity.y) &&
            this.spaceship.decelerationTime >= 0 &&
            this.spaceship.decelerationTime <= 1)
            this.spaceship.decelerate();
        // handle bullets
        this.spaceship.bullets.forEach(function (b) {
            if (b.status === 'dead')
                _this.spaceship.removeBullet(b.id);
            b.update();
            if (b.status !== 'alive')
                return;
            _this.shootables.list.forEach(function (shootable) {
                var collision = shootable.circle
                    ? checkCollision_1.checkCollisionBtwnCircles(shootable, b)
                    : checkCollision_1.checkIfInsideRect(shootable, b);
                if (collision) {
                    b.onHit();
                    shootable.onHit();
                }
            });
        });
        this.shootables.removeDeadEls();
        this.boundaries.updateSizes();
        this.boundaries.removeEmptyBoundaries();
    };
    return GameState;
}());
exports.default = GameState;
