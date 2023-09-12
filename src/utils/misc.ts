import { XY } from "../../types/interfaces";

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

export async function createImageBlob(src: string) {
  const res = await fetch(src);
  const blob = await res.blob();
  return blob;
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
