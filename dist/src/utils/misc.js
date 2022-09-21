"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getTranslateY(el) {
    var style = window.getComputedStyle(el);
    var matrix = new WebKitCSSMatrix(style.transform);
    return matrix.m42;
}
exports.getTranslateY = getTranslateY;
function createImage(src) {
    var image = new Image();
    image.src = src;
    return image;
}
exports.createImage = createImage;
