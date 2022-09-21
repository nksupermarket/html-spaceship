"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DeltaTimer = /** @class */ (function () {
    function DeltaTimer(onTimerEnd, interval) {
        this.timeout = null;
        this.lastTime = 0;
        this.onTimerEnd = onTimerEnd;
        this.interval = interval;
        this.loop = this.loop.bind(this);
    }
    DeltaTimer.prototype.loop = function () {
        var currTime = Date.now();
        var elapsed = currTime - this.lastTime;
        var delay = Math.max(this.interval - elapsed, 0);
        this.timeout = setTimeout(this.loop, delay);
        this.onTimerEnd();
        this.lastTime = Date.now();
    };
    DeltaTimer.prototype.start = function () {
        this.timeout = setTimeout(this.loop, this.interval);
    };
    DeltaTimer.prototype.stop = function () {
        this.timeout && clearTimeout(this.timeout);
        this.timeout = null;
    };
    return DeltaTimer;
}());
exports.default = DeltaTimer;
