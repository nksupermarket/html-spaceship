"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
function wrapWords(str, _a) {
    var last = _a.last, boundary = _a.boundary;
    return str.split(' ').map(function (w, i, arr) {
        var rootClass = ['shootable-el'];
        if (last && i !== arr.length - 1)
            rootClass.push('last');
        if (boundary)
            rootClass.push('boundary');
        return (react_1.default.createElement("span", { key: i, className: rootClass.join(' ') },
            w,
            "\u00A0"));
    });
}
exports.default = wrapWords;
