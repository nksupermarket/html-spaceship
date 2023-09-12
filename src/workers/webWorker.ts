import { Deactive, Dimensions, Direction } from "../../types/types";
import { CanvasOffScreen } from "../classes/Canvas";
import { activateBulletSprites } from "../classes/entities/Bullet";
import { WebWorkerGameState } from "../classes/GameState";

type ActiveState = {
  active: true;
  gameState: WebWorkerGameState;
  offscreenCanvas: CanvasOffScreen;
  windowDimensions: Dimensions;
};
type DeactiveState = Deactive<ActiveState>;
let state: DeactiveState | ActiveState = {
  active: false,
  gameState: null,
  offscreenCanvas: null,
  windowDimensions: null,
};

self.onmessage = async (msg) => {
  const { data } = msg;
  switch (data.event) {
    case "init": {
      await activateBulletSprites();
      state = {
        active: true,
        gameState: new WebWorkerGameState(data.spaceshipConfig, {
          x: data.windowDimensions.width,
          y: data.windowDimensions.height,
        }),
        offscreenCanvas: new CanvasOffScreen(data.offscreen, data.scoreColor),
        windowDimensions: data.windowDimensions,
      };

      self.postMessage({ event: "initiated" });
      break;
    }

    case "update": {
      if (!state.gameState) return;
      const { newRootElTranslateValue, shootablesHitAxis } =
        state.gameState!.update(
          data.scrollY,
          data.rootElTranslateYValue,
          data.distanceFromTopViewportToBottomOfDoc,
          data.boundaries,
          data.shootables
        );

      state.offscreenCanvas!.draw(
        state.windowDimensions!,
        state.gameState!.spaceship,
        state.gameState!.score.display
      );

      self.postMessage({
        event: "updated",
        newRootElTranslateValue,
        shootablesHitAxis,
      });

      break;
    }

    case "key toggle": {
      state.gameState!.keyPress.keys[data.direction as Direction].pressed =
        data.isPressed;
      state.gameState!.spaceship.accelerating = data.isPressed;
      break;
    }

    case "mouse": {
      state.gameState!.mouse.x = data.pos.x;
      state.gameState!.mouse.y = data.pos.y;
      break;
    }

    case "shoot": {
      state.gameState!.keyPress.keys.click.pressed = true;
      if (!state.gameState!.keyPress.keys.click.timer)
        state.gameState!.keyPress.setTimer(
          "click",
          () => (state.gameState!.spaceship.shotAvailable = true),
          250
        );
      break;
    }

    case "reset shoot": {
      state.gameState!.spaceship.shotAvailable = true;
      state.gameState!.keyPress.keys.click.pressed = false;
      if (state.gameState!.keyPress.keys.click.timer)
        state.gameState!.keyPress.removeTimer();
      break;
    }

    case "resize": {
      state.gameState?.updateBounds({
        y: data.dimensions.height,
        x: data.dimensions.width,
      });
      state.offscreenCanvas?.updateSize(data.dimensions);
      state.windowDimensions = data.dimensions;
      break;
    }
  }
};
