import { XY } from '../../types/interfaces';

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

export function getExtremities(vertices: XY[]) {
  let top = Infinity;
  let right = 0;
  let left = Infinity;
  let bottom = 0;

  for (let i = 0; i < vertices.length; i++) {
    if (vertices[i].x < left) left = vertices[i].x;
    if (vertices[i].y < top) top = vertices[i].y;
    if (vertices[i].x > right) right = vertices[i].x;
    if (vertices[i].y > bottom) bottom = vertices[i].y;
  }
  return {
    top,
    left,
    right,
    bottom,
  };
}

export function lightenDarkenColor(col: string, amt: number) {
  var usePound = false;

  if (col[0] == '#') {
    col = col.slice(1);
    usePound = true;
  }

  var num = parseInt(col, 16);

  var r = (num >> 16) + amt;

  if (r > 255) r = 255;
  else if (r < 0) r = 0;

  var b = ((num >> 8) & 0x00ff) + amt;

  if (b > 255) b = 255;
  else if (b < 0) b = 0;

  var g = (num & 0x0000ff) + amt;

  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16);
}
