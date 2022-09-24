"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var math_1 = require("./math");
function checkIfInsideRect(rectOne, rectTwo) {
    var insideY = rectTwo.y <= rectOne.y + rectOne.height &&
        rectTwo.y + rectTwo.height > rectOne.y;
    var insideX = rectOne.x <= rectTwo.x + rectTwo.width &&
        rectTwo.x <= rectOne.x + rectOne.width;
    return insideX && insideY;
}
exports.checkIfInsideRect = checkIfInsideRect;
function checkShipEdgeCollision(edge, rect) {
    var collideY = rect.y <= edge.y && rect.y + rect.height > edge.y;
    var collideX = rect.x <= edge.x && rect.x + rect.width > edge.x;
    return collideY && collideX;
}
exports.checkShipEdgeCollision = checkShipEdgeCollision;
function checkIfWithinBounds(edge, bounds) {
    return edge.x > 0 && edge.x < bounds.x && edge.y > 0 && edge.y < bounds.y;
}
exports.checkIfWithinBounds = checkIfWithinBounds;
function pointInRectangle(centerOfCircle, rectCorners) {
    var _a = rectCorners.reduce(function (acc, curr) {
        var min = acc.min, max = acc.max;
        if (!max || curr.x > max.x)
            max.x = curr.x;
        if (!min || curr.x < min.x)
            min.x = curr.x;
        if (!max || curr.y > max.y)
            max.y = curr.y;
        if (!min || curr.y < min.y)
            min.y = curr.y;
        return acc;
    }, { max: {}, min: {} }), min = _a.min, max = _a.max;
    return (centerOfCircle.x > min.x &&
        centerOfCircle.x < max.x &&
        centerOfCircle.y > min.y &&
        centerOfCircle.y < max.y);
}
function intersectCircle(centerOfCircle, r, rectVertices) {
    for (var _i = 0, rectVertices_1 = rectVertices; _i < rectVertices_1.length; _i++) {
        var v = rectVertices_1[_i];
        var p1 = v[0], p2 = v[1];
        if (
        // distance between centerOfCenter and line is less than radius
        math_1.distToSegment(centerOfCircle, p1, p2) < r)
            return true;
    }
    return false;
}
function checkCollisionBtwnCircleAndRect(circle, rectCorners, rectVertices) {
    var centerOfCircle = circle.getCenter();
    return (pointInRectangle(centerOfCircle, rectCorners) ||
        intersectCircle(centerOfCircle, circle.width / 2, rectVertices));
}
exports.checkCollisionBtwnCircleAndRect = checkCollisionBtwnCircleAndRect;
function checkCollisionBtwnCircles(c1, c2) {
    // get distance between centers of circles
    var _a = c1.getCenter(), x1 = _a.x, y1 = _a.y;
    var _b = c2.getCenter(), x2 = _b.x, y2 = _b.y;
    var distance = Math.sqrt(math_1.sqr(x2 - x1) + math_1.sqr(y2 - y1));
    return distance <= c1.width / 2 + c2.width / 2;
}
exports.checkCollisionBtwnCircles = checkCollisionBtwnCircles;
