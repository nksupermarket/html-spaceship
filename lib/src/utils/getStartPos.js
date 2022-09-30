"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Spaceship_1 = __importDefault(require("../classes/Spaceship"));
var checkCollision_1 = require("./checkCollision");
var constants_1 = require("./constants");
function getStartPos(boundaries) {
    function getRdmPos() {
        return {
            x: Math.floor(Math.random() * (window.innerWidth - constants_1.SS_DIM.width)),
            y: Math.floor(Math.random() * (window.innerHeight - constants_1.SS_DIM.height)),
        };
    }
    var spaceship = new Spaceship_1.default(getRdmPos());
    var inEmptySpace = false;
    while (!inEmptySpace) {
        for (var i = 0; i < boundaries.length; i++) {
            if (checkCollision_1.checkIfInsideRect(spaceship, boundaries[i])) {
                spaceship = new Spaceship_1.default(getRdmPos());
                continue;
            }
        }
        inEmptySpace = true;
    }
    return {
        x: spaceship.x,
        y: spaceship.y,
    };
}
exports.default = getStartPos;
