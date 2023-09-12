import run from "./main";

window.addEventListener("dblclick", () =>
  run({
    wrapWordsClass: "abc",
    removedClass: "removed",
    workerDir: "/workers",
    keys: {
      deactivate: " ",
      left: "a",
      up: "w",
      right: "d",
      down: "s",
    },
  })
);
