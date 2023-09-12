import { Option } from "../types/types";
import { CanvasOffScreen } from "./classes/Canvas";

let offScreenCanvas: Option<CanvasOffScreen> = null;
let windowDimensions = {
  width: 0,
  height: 0,
};

self.onmessage = (msg) => {
  const { data } = msg;
  switch (data.event) {
    case "init": {
      offScreenCanvas = new CanvasOffScreen(data.offscreen);
      windowDimensions = data.windowDimensions;
    }
    case "render": {
      offScreenCanvas!.draw(windowDimensions, data.spaceship, data.score);
    }
    case "resize": {
      windowDimensions = data.windowDimensions;
    }
  }
};
