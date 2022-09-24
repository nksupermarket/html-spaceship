import Boundary from '../classes/Boundary';
import Spaceship from '../classes/Spaceship';
import { checkIfInsideRect } from './checkCollision';
import { SS_DIM } from './constants';

export default function getStartPos(boundaries: Boundary[]) {
  function getRdmPos() {
    return {
      x: Math.floor(Math.random() * (window.innerWidth - SS_DIM.width)),
      y: Math.floor(Math.random() * (window.innerHeight - SS_DIM.height)),
    };
  }

  let spaceship = new Spaceship(getRdmPos());

  let inEmptySpace = false;
  while (!inEmptySpace) {
    for (let i = 0; i < boundaries.length; i++) {
      if (checkIfInsideRect(spaceship, boundaries[i])) {
        spaceship = new Spaceship(getRdmPos());
        continue;
      }
    }

    inEmptySpace = true;
  }

  return {
    x: spaceship.x,
    y: spaceship.y,
  };
}
