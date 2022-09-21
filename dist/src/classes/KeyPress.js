"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var DeltaTimer_1 = __importDefault(require("./DeltaTimer"));
var KeyPress = /** @class */ (function () {
    function KeyPress() {
        this.keys = {
            left: { pressed: false },
            right: { pressed: false },
            up: { pressed: false },
            down: { pressed: false },
            click: { pressed: false, timer: null },
        };
    }
    KeyPress.prototype.setTimer = function (key, cb, delay) {
        var _a;
        if (this.keys[key].timer)
            return;
        this.keys[key].timer = new DeltaTimer_1.default(cb, delay);
        (_a = this.keys[key].timer) === null || _a === void 0 ? void 0 : _a.start();
    };
    KeyPress.prototype.removeTimer = function () {
        var _a;
        (_a = this.keys.click.timer) === null || _a === void 0 ? void 0 : _a.stop();
        this.keys.click.timer = null;
    };
    return KeyPress;
}());
exports.default = KeyPress;
