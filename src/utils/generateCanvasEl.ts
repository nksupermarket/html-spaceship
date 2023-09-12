export function generateCanvasEl() {
  const el = document.createElement("canvas");
  el.classList.add("space");
  document.documentElement.appendChild(el);

  el.height = window.innerHeight;
  el.width = window.innerWidth;

  return el;
}
