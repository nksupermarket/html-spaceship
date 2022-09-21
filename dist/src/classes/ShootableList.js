"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Shootable_1 = __importDefault(require("./Shootable"));
var ShootableList = /** @class */ (function () {
    function ShootableList() {
        this.list = this.getList();
    }
    ShootableList.prototype.getList = function () {
        return Array.from(document.querySelectorAll('.shootable_el')).map(function (el) {
            var _a = el.getBoundingClientRect(), x = _a.x, y = _a.y, height = _a.height, width = _a.width;
            return new Shootable_1.default(x, y, width, height, el);
        });
    };
    ShootableList.prototype.removeDeadEls = function () {
        this.list = this.list.filter(function (se) {
            if (se.lifePoints <= 0) {
                se.removeEl();
            }
            return se.lifePoints > 0;
        });
    };
    return ShootableList;
}());
exports.default = ShootableList;
