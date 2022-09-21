"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Entity_1 = __importDefault(require("./Entity"));
var misc_1 = require("../utils/misc");
var Bullet_Idle_01_png_1 = __importDefault(require("../assets/bullet/Idle/Bullet_Idle_01.png"));
var Bullet_Idle_03_png_1 = __importDefault(require("../assets/bullet/Idle/Bullet_Idle_03.png"));
var Bullet_Idle_02_png_1 = __importDefault(require("../assets/bullet/Idle/Bullet_Idle_02.png"));
var Bullet_Idle_04_png_1 = __importDefault(require("../assets/bullet/Idle/Bullet_Idle_04.png"));
var Bullet_Idle_05_png_1 = __importDefault(require("../assets/bullet/Idle/Bullet_Idle_05.png"));
var Bullet_Idle_06_png_1 = __importDefault(require("../assets/bullet/Idle/Bullet_Idle_06.png"));
var Bullet_Idle_07_png_1 = __importDefault(require("../assets/bullet/Idle/Bullet_Idle_07.png"));
var Bullet_Poof_01_png_1 = __importDefault(require("../assets/bullet/Poof/Bullet_Poof_01.png"));
var Bullet_Poof_02_png_1 = __importDefault(require("../assets/bullet/Poof/Bullet_Poof_02.png"));
var Bullet_Poof_03_png_1 = __importDefault(require("../assets/bullet/Poof/Bullet_Poof_03.png"));
var Bullet_Poof_04_png_1 = __importDefault(require("../assets/bullet/Poof/Bullet_Poof_04.png"));
var Bullet_Poof_05_png_1 = __importDefault(require("../assets/bullet/Poof/Bullet_Poof_05.png"));
var Bullet_Poof_06_png_1 = __importDefault(require("../assets/bullet/Poof/Bullet_Poof_06.png"));
var Bullet_Poof_07_png_1 = __importDefault(require("../assets/bullet/Poof/Bullet_Poof_07.png"));
var count = 0;
var bulletSprites = {
    idle: [
        misc_1.createImage(Bullet_Idle_01_png_1.default),
        misc_1.createImage(Bullet_Idle_02_png_1.default),
        misc_1.createImage(Bullet_Idle_03_png_1.default),
        misc_1.createImage(Bullet_Idle_04_png_1.default),
        misc_1.createImage(Bullet_Idle_05_png_1.default),
        misc_1.createImage(Bullet_Idle_06_png_1.default),
        misc_1.createImage(Bullet_Idle_07_png_1.default),
    ],
    poof: [
        misc_1.createImage(Bullet_Poof_01_png_1.default),
        misc_1.createImage(Bullet_Poof_02_png_1.default),
        misc_1.createImage(Bullet_Poof_03_png_1.default),
        misc_1.createImage(Bullet_Poof_04_png_1.default),
        misc_1.createImage(Bullet_Poof_05_png_1.default),
        misc_1.createImage(Bullet_Poof_06_png_1.default),
        misc_1.createImage(Bullet_Poof_07_png_1.default),
    ],
};
var Bullet = /** @class */ (function (_super) {
    __extends(Bullet, _super);
    function Bullet(_a, slope) {
        var x = _a.x, y = _a.y;
        var _this = _super.call(this, x, y, 20, 20) || this;
        _this.speed = 5;
        _this.velocity = { x: slope.x / _this.speed, y: slope.y / _this.speed };
        _this.id = count++;
        _this.currAction = 'idle';
        _this.spriteIdx = 0;
        _this.status = 'alive';
        return _this;
    }
    Bullet.prototype.draw = function (c) {
        if (this.status === 'dead')
            return;
        c.drawImage(bulletSprites[this.currAction][this.spriteIdx], this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
        this.resetSpriteIdx();
        this.increaseSpriteIdx();
    };
    Bullet.prototype.updatePosition = function () {
        this.x += this.velocity.x;
        this.y += this.velocity.y;
    };
    Bullet.prototype.increaseSpriteIdx = function () {
        this.spriteIdx++;
    };
    Bullet.prototype.resetSpriteIdx = function (override) {
        if (this.spriteIdx === bulletSprites[this.currAction].length - 1 ||
            override)
            this.spriteIdx = 0;
    };
    Bullet.prototype.updateAction = function (action) {
        if (action !== this.currAction)
            this.resetSpriteIdx('override');
        this.currAction = action;
    };
    Bullet.prototype.update = function () {
        switch (this.status) {
            case 'alive':
                this.updatePosition();
                break;
            case 'dieing': {
                if (this.spriteIdx === bulletSprites[this.currAction].length - 1)
                    this.status = 'dead';
                break;
            }
        }
    };
    Bullet.prototype.onHit = function () {
        this.updateAction('poof');
        this.status = 'dieing';
    };
    Bullet.prototype.getCenter = function () {
        return {
            x: this.x + this.width / 2,
            y: this.y + this.height / 2,
        };
    };
    return Bullet;
}(Entity_1.default));
exports.default = Bullet;
