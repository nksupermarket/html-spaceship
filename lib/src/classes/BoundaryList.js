"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Boundary_1 = __importDefault(require("./Boundary"));
var BoundaryList = /** @class */ (function () {
    function BoundaryList() {
        var tmp = Array.from(document.querySelectorAll('.boundary'));
        this.list = tmp.map(function (el) { return new Boundary_1.default(el); });
    }
    BoundaryList.prototype.removeEmptyBoundaries = function () {
        this.list = this.list.filter(function (b) {
            return b.height && !b.el.classList.contains('removed');
        });
    };
    BoundaryList.prototype.updatePositions = function () {
        this.list.forEach(function (b) { return b.updatePos(); });
    };
    BoundaryList.prototype.updateSizes = function () {
        this.list.forEach(function (b) { return b.recalculateSize(); });
    };
    return BoundaryList;
}());
exports.default = BoundaryList;
