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
var Shootable = /** @class */ (function (_super) {
    __extends(Shootable, _super);
    function Shootable(x, y, width, height, el) {
        var _this = _super.call(this, x, y, height, width) || this;
        _this.lifePoints = 50;
        _this.el = el;
        _this.circle = window.getComputedStyle(el).borderRadius === '50%';
        return _this;
    }
    Shootable.prototype.removeEl = function () {
        this.el.className = 'removed';
    };
    Shootable.prototype.onHit = function () {
        this.lifePoints -= 10;
        this.shake();
    };
    Shootable.prototype.shake = function () {
        this.el.classList.remove('shake');
        void this.el.offsetWidth;
        this.el.classList.add('shake');
    };
    Shootable.prototype.updatePos = function () {
        var _a = this.el.getBoundingClientRect(), x = _a.x, y = _a.y;
        this.x = x;
        this.y = y;
    };
    Shootable.prototype.getCenter = function () {
        return { x: this.x + this.width / 2, y: this.y + this.height / 2 };
    };
    return Shootable;
}(Entity_1.default));
exports.default = Shootable;
