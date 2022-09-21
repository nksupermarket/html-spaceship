"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Canvas_1 = __importDefault(require("./classes/Canvas"));
var GameState_1 = __importDefault(require("./classes/GameState"));
require("./style.css");
document.documentElement.style.overflow = 'hidden';
var canvas = new Canvas_1.default();
var gameState = new GameState_1.default();
function animate() {
    gameState.update();
    canvas.draw(gameState.spaceship);
    requestAnimationFrame(animate);
}
animate();
window.addEventListener('resize', function () {
    gameState.shootables.list = gameState.shootables.getList();
    canvas.setCorrectSize();
});
window.addEventListener('mousemove', function (e) {
    gameState.mouse.x = e.clientX;
    gameState.mouse.y = e.clientY;
});
function toggleKeypress(key, keyIsPressed) {
    switch (key) {
        case 'a':
        case 'ArrowLeft': {
            gameState.keyPress.keys.left.pressed = keyIsPressed;
            gameState.spaceship.accelerating = keyIsPressed;
            break;
        }
        case 'd':
        case 'ArrowRight': {
            gameState.keyPress.keys.right.pressed = keyIsPressed;
            gameState.spaceship.accelerating = keyIsPressed;
            break;
        }
        case 'w':
        case 'ArrowUp': {
            gameState.keyPress.keys.up.pressed = keyIsPressed;
            gameState.spaceship.accelerating = keyIsPressed;
            break;
        }
        case 's':
        case 'ArrowDown': {
            gameState.keyPress.keys.down.pressed = keyIsPressed;
            gameState.spaceship.accelerating = keyIsPressed;
            break;
        }
    }
}
window.addEventListener('mousedown', function (e) {
    e.preventDefault();
    gameState.keyPress.keys.click.pressed = true;
    if (!gameState.keyPress.keys.click.timer)
        gameState.keyPress.setTimer('click', function () { return (gameState.spaceship.shotAvailable = true); }, 500);
});
window.addEventListener('mouseup', function (e) {
    e.preventDefault();
    gameState.spaceship.shotAvailable = true;
    gameState.keyPress.keys.click.pressed = false;
    if (gameState.keyPress.keys.click.timer)
        gameState.keyPress.removeTimer();
});
window.addEventListener('keydown', function (e) {
    toggleKeypress(e.key, true);
});
window.addEventListener('keyup', function (e) {
    toggleKeypress(e.key, false);
});
