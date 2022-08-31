import Spaceship from '../src/classes/Spaceship';
import Shootable from '../src/classes/Shootable';
import { checkCollisionBtwnCircleAndRect } from '../src/utils/checkCollision';

describe('checkCollisionBtwnCircleAndRect works', () => {
  let circleEl: undefined | HTMLElement;

  function createCircleEl(size: number) {
    circleEl = document.createElement('div');
    circleEl.style.borderRadius = '50%';
    circleEl.style.height = `${size}px`;
    circleEl.style.width = `${size}px`;
    document.body.append(circleEl);
  }

  function removeCircleEl() {
    circleEl?.remove();
  }

  it('works when only one edge of the rectangle is inside circle', () => {
    const spaceship = new Spaceship({ x: 500, y: 500 });
    createCircleEl(500);

    const circleSize = 100;
    const shootable = new Shootable(
      500,
      spaceship.y - circleSize + 10,
      circleSize,
      circleSize,
      circleEl as HTMLElement
    );

    expect(
      checkCollisionBtwnCircleAndRect(
        shootable,
        spaceship.getCorners(),
        spaceship.getVertices()
      )
    ).toBe(true);

    shootable.y -= 11;
    expect(
      checkCollisionBtwnCircleAndRect(
        shootable,
        spaceship.getCorners(),
        spaceship.getVertices()
      )
    ).toBe(false);

    shootable.y = spaceship.y + spaceship.height - 10;
    expect(
      checkCollisionBtwnCircleAndRect(
        shootable,
        spaceship.getCorners(),
        spaceship.getVertices()
      )
    ).toBe(true);

    shootable.y += 11;
    expect(
      checkCollisionBtwnCircleAndRect(
        shootable,
        spaceship.getCorners(),
        spaceship.getVertices()
      )
    ).toBe(false);

    shootable.y = 500;
    shootable.x = spaceship.x - circleSize + 10;
    expect(
      checkCollisionBtwnCircleAndRect(
        shootable,
        spaceship.getCorners(),
        spaceship.getVertices()
      )
    ).toBe(true);

    shootable.x -= 11;
    expect(
      checkCollisionBtwnCircleAndRect(
        shootable,
        spaceship.getCorners(),
        spaceship.getVertices()
      )
    ).toBe(false);

    shootable.x = spaceship.y + spaceship.width - 10;
    expect(
      checkCollisionBtwnCircleAndRect(
        shootable,
        spaceship.getCorners(),
        spaceship.getVertices()
      )
    ).toBe(true);

    shootable.x += 11;
    expect(
      checkCollisionBtwnCircleAndRect(
        shootable,
        spaceship.getCorners(),
        spaceship.getVertices()
      )
    ).toBe(false);

    removeCircleEl();
  });

  it('works when center of circle is inside rectangle', () => {
    const spaceship = new Spaceship({ x: 500, y: 500 });
    createCircleEl(500);

    const circleSize = 100;
    const shootable = new Shootable(
      500,
      500,
      circleSize,
      circleSize,
      circleEl as HTMLElement
    );

    expect(
      checkCollisionBtwnCircleAndRect(
        shootable,
        spaceship.getCorners(),
        spaceship.getVertices()
      )
    ).toBe(true);

    removeCircleEl();
  });
});
