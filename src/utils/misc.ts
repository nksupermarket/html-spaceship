export function getTranslateY(el: HTMLElement) {
  const style = window.getComputedStyle(el);
  const matrix = new WebKitCSSMatrix(style.transform);
  return matrix.m42;
}

export function createImage(src: string) {
  const image = new Image();
  image.src = src;
  return image;
}
