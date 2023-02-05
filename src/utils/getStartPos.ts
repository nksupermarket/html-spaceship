import Boundary from '../classes/boundaries';
import Spaceship from '../classes/Spaceship';
import { checkIfInsideRect } from './collision';
import { SS_DIMENSIONS } from './constants';

export default function getStartPos(boundaries: Boundary[]) {
  function getRdmPos() {
    return {
      x: Math.floor(Math.random() * (window.innerWidth - SS_DIMENSIONS.width)),
      y: Math.floor(
        Math.random() * (window.innerHeight * 0.4 - SS_DIMENSIONS.height) +
          window.innerHeight * 0.3
      ),
    };
  }

  let spaceship = new Spaceship(getRdmPos(), 'light', 10);

  let inEmptySpace = false;
  while (!inEmptySpace) {
    for (let i = 0; i < boundaries.length; i++) {
      if (checkIfInsideRect(spaceship, boundaries[i])) {
        spaceship = new Spaceship(getRdmPos(), 'light', 10);
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
