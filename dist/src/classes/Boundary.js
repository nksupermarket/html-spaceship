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
var Boundary = /** @class */ (function (_super) {
    __extends(Boundary, _super);
    function Boundary(el) {
        var _this = this;
        var _a = el.getBoundingClientRect(), x = _a.x, y = _a.y, height = _a.height, width = _a.width;
        _this = _super.call(this, x, y, height, width) || this;
        _this.el = el;
        _this.circle = window.getComputedStyle(el).borderRadius === '50%';
        return _this;
    }
    Boundary.prototype.recalculateSize = function () {
        var _a = this.el.getBoundingClientRect(), height = _a.height, width = _a.width;
        this.height = height;
        this.width = width;
    };
    Boundary.prototype.getCenter = function () {
        return { x: this.x + this.width / 2, y: this.y + this.height / 2 };
    };
    return Boundary;
}(Entity_1.default));
exports.default = Boundary;
