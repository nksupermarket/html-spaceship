import { Config, KeysConfig } from "../types/interfaces";
import { ActiveState, Deactive, Direction } from "../types/types";
import { Canvas } from "./classes/Canvas";
import { Spaceship } from "./classes/entities/Spaceship";
import { BoundaryList } from "./classes/lists/BoundaryList";
import { ShootableList } from "./classes/lists/ShootableList";
import "./style.css";
import { createImageBlob, getTranslateY } from "./utils/misc";
import wrapWords from "./wrapWords";

type DeactiveState = Deactive<ActiveState>;
let state: DeactiveState | ActiveState = {
  canvas: null,
  boundaries: null,
  shootables: null,
  worker: null,
  active: false,
  rootEl: null,
};

function animate() {
  if (!state.active) return;

  state.worker.postMessage({
    event: "update",
    scrollY: window.scrollY,
    rootElTranslateYValue: getTranslateY(state.rootEl),
    distanceFromTopViewportToBottomOfDoc: Math.floor(
      document.documentElement.scrollHeight - window.innerHeight
    ),
    boundaries: state.boundaries.convertToBare(),
    shootables: state.shootables.convertToBare(),
  });
  for (
    let i = Math.max(
      state.shootables.list.length,
      state.boundaries.list.length
    );
    i >= 0;
    i--
  ) {
    if (i < state.shootables.list.length) {
      const shootable = state.shootables.list[i];
      shootable.update();
      if (shootable.lifePoints <= 0) {
        // state.score.updateTotal(shootable);
        // state.shootables.removeEl(i, state.REMOVE_CLASS);
      }
    }
    if (i < state.boundaries.list.length) {
      const boundary = state.boundaries.list[i];

      boundary.update();
      // if (boundary.el.classList.contains(state.REMOVE_CLASS))
      //   state.boundaries.removeBoundary(i);
    }
  }

  requestAnimationFrame(animate);
}

const toggleKeyPress =
  (keysConfig: KeysConfig, state: DeactiveState | ActiveState) =>
  (key: string, keyIsPressed: boolean) => {
    if (!state.active) return;

    function sendKeyPressToWorker(direction: Direction) {
      state.worker?.postMessage({
        event: "key toggle",
        direction,
        isPressed: keyIsPressed,
      });
    }
    switch (key) {
      case keysConfig.left: {
        sendKeyPressToWorker("left");
        break;
      }
      case keysConfig.right: {
        sendKeyPressToWorker("right");
        break;
      }
      case keysConfig.up: {
        sendKeyPressToWorker("up");
        break;
      }
      case keysConfig.down: {
        sendKeyPressToWorker("down");
        break;
      }
    }
  };

function getEventHandlers(keysConfig: KeysConfig) {
  const onKeyPress = toggleKeyPress(keysConfig, state);
  return {
    resize: () => {
      state.shootables!.list = state.shootables!.getList();
      state.boundaries!.list = state.boundaries!.getList();
      // state.canvas?.setCorrectSize();
      state.worker!.postMessage({
        event: "resize",
        dimensions: {
          width: window.innerWidth,
          height: window.innerHeight,
        },
      });
    },

    changeAimPos: (e: MouseEvent) => {
      state.worker?.postMessage({
        event: "mouse",
        pos: { x: e.clientX, y: e.clientY },
      });
    },

    shoot: (e: MouseEvent) => {
      e.preventDefault();
      state.worker?.postMessage({ event: "shoot" });
    },

    resetShoot: (e: MouseEvent) => {
      if (!state.active) return;
      e.preventDefault();
      state.worker?.postMessage({ event: "reset shoot" });
    },

    handleKeyPress: (e: KeyboardEvent) => {
      onKeyPress(e.key, true);
    },

    handleKeyUp: (e: KeyboardEvent) => {
      onKeyPress(e.key, false);
    },
  };
}

let keysConfigHandler = {
  get: function (target: KeysConfig, name: string) {
    switch (name) {
      case "left": {
        return target[name] || "a";
      }
      case "right": {
        return target[name] || "d";
      }
      case "up": {
        return target[name] || "w";
      }
      case "down": {
        return target[name] || "s";
      }
      case "deactivate": {
        return target[name] || " ";
      }
    }
  },
};

let configHandler = {
  get: function (target: Config, name: keyof Config) {
    switch (name) {
      case "keys": {
        return target[name] || new Proxy({} as KeysConfig, keysConfigHandler);
      }
      case "wrapWordsClass": {
        return target[name] || undefined;
      }
      case "theme": {
        return target[name] || "light";
      }
      case "speed": {
        return target[name] || 10;
      }
      case "rootEl": {
        return target[name] || document.body;
      }
      default: {
        return target[name];
      }
    }
  },
};

export default async function run(config: Config) {
  const p = new Proxy(config, configHandler) as Required<Config>;
  if (state.active) return;
  if (p.wrapWordsClass) wrapWords(p.wrapWordsClass);
  document.documentElement.style.overflow = "hidden";

  state = {
    active: true,
    canvas: new Canvas(),
    boundaries: new BoundaryList(),
    shootables: new ShootableList(),
    worker: new Worker(`${p.workerDir}/webWorker.js`, {
      type: "module",
    }),
    rootEl: config.rootEl || document.body,
  };

  const spaceshipImage = await createImageBitmap(
    await createImageBlob(
      p.theme === "light"
        ? require("./assets/optimized/rocket-lightmode.png").default
        : require("./assets/optimized/rocket-darkmode.png").default
    )
  );
  const offscreen = state.canvas.el.transferControlToOffscreen();
  state.worker.postMessage(
    {
      event: "init",
      offscreen,
      spaceshipConfig: {
        speed: 10,
        image: spaceshipImage,
        startPos: Spaceship.getStartPos(state.boundaries.list),
      },
      windowDimensions: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
    },
    [offscreen]
  );
  p.rootEl.style.transform = "translateY(0)";
  const eventHandlers = getEventHandlers(p.keys)!;

  function preventDefault(e: Event) {
    e.preventDefault();
  }

  state.worker.onmessage = (msg) => {
    const { data } = msg;

    switch (data.event) {
      case "initiated": {
        window.addEventListener("resize", eventHandlers.resize);

        window.addEventListener("mousemove", eventHandlers.changeAimPos);
        window.addEventListener("mousedown", eventHandlers.shoot);
        window.addEventListener("mouseup", eventHandlers.resetShoot);

        window.addEventListener("keydown", eventHandlers.handleKeyPress);
        window.addEventListener("keyup", eventHandlers.handleKeyUp);

        window.addEventListener("contextmenu", preventDefault);

        animate();

        window.addEventListener("keydown", function deactivate(e) {
          if (e.key != p.keys.deactivate) return;
          e.preventDefault();

          state.canvas?.remove();
          state = {
            canvas: null,
            boundaries: null,
            shootables: null,
            worker: null,
            active: false,
            rootEl: null,
          };

          window.removeEventListener("resize", eventHandlers.resize);
          window.removeEventListener("mousemove", eventHandlers.changeAimPos);
          window.removeEventListener("mousedown", eventHandlers.shoot);
          window.removeEventListener("mouseup", eventHandlers.resetShoot);
          window.removeEventListener("keydown", eventHandlers.handleKeyPress);
          window.removeEventListener("keyup", eventHandlers.handleKeyUp);
          window.removeEventListener("contextmenu", preventDefault);

          window.removeEventListener("keydown", deactivate);

          document
            .querySelectorAll(`.${config.removedClass}`)
            .forEach((el) => el.classList.remove(config.removedClass));
          document.documentElement.style.overflow = "scroll";

          const translateVal = getTranslateY(p.rootEl);
          p.rootEl.style.transform = "";
          window.scrollTo(0, -translateVal + window.scrollY);

          config.onRemove && config.onRemove();
        });
      }

      case "updated": {
        const { newRootElTranslateValue } = data;
        if (newRootElTranslateValue != null)
          state.rootEl!.style.transform = `translateY(${newRootElTranslateValue}px)`;
      }
    }
  };
}
