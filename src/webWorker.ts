import { CanvasOffScreen } from "./classes/Canvas";
import { WebWorkerGameState } from "./classes/WebWorker/WebWorkerGameState";

let gameState = null;
let offscreenCanvas = null;
self.onmessage = (msg) => {
  switch (msg.data.event) {
    case "init": {
      const { data } = msg;
      gameState = new WebWorkerGameState(data.theme, data.speed);
      offscreenCanvas = new CanvasOffScreen(data.offscreen, data.scoreColor);
    }
  }
};
