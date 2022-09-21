"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Canvas = /** @class */ (function () {
    function Canvas() {
        this.el = document.createElement('canvas');
        document.documentElement.appendChild(this.el);
        this.setCorrectSize();
    }
    Canvas.prototype.setCorrectSize = function () {
        this.el.height = window.innerHeight;
        this.el.width = window.innerWidth;
    };
    Canvas.prototype.draw = function (spaceship) {
        var c = this.el.getContext('2d');
        if (!c)
            return;
        c.clearRect(0, 0, window.innerWidth, window.innerHeight);
        spaceship.bullets.forEach(function (b) { return b.draw(c); });
        spaceship.draw(c);
    };
    return Canvas;
}());
exports.default = Canvas;
