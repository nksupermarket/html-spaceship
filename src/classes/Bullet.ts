import { XY } from '../../types/types';
import Entity from './Entity';
import { createImage } from '../utils/misc';

import idle01 from '../assets/bullet/Idle/Bullet_Idle_01.png';
import idle03 from '../assets/bullet/Idle/Bullet_Idle_03.png';
import idle02 from '../assets/bullet/Idle/Bullet_Idle_02.png';
import idle04 from '../assets/bullet/Idle/Bullet_Idle_04.png';
import idle05 from '../assets/bullet/Idle/Bullet_Idle_05.png';
import idle06 from '../assets/bullet/Idle/Bullet_Idle_06.png';
import idle07 from '../assets/bullet/Idle/Bullet_Idle_07.png';

import poof01 from '../assets/bullet/Poof/Bullet_Poof_01.png';
import poof02 from '../assets/bullet/Poof/Bullet_Poof_02.png';
import poof03 from '../assets/bullet/Poof/Bullet_Poof_03.png';
import poof04 from '../assets/bullet/Poof/Bullet_Poof_04.png';
import poof05 from '../assets/bullet/Poof/Bullet_Poof_05.png';
import poof06 from '../assets/bullet/Poof/Bullet_Poof_06.png';
import poof07 from '../assets/bullet/Poof/Bullet_Poof_07.png';

let count = 0;

const bulletSprites = {
  idle: [
    createImage(idle01),
    createImage(idle02),
    createImage(idle03),
    createImage(idle04),
    createImage(idle05),
    createImage(idle06),
    createImage(idle07),
  ],
  poof: [
    createImage(poof01),
    createImage(poof02),
    createImage(poof03),
    createImage(poof04),
    createImage(poof05),
    createImage(poof06),
    createImage(poof07),
  ],
};

type Action = keyof typeof bulletSprites;

export default class Bullet extends Entity {
  id: number;
  speed: 5;
  currAction: Action;
  spriteIdx: 0 | 1 | 2 | 3 | 4 | 5 | 6;

  constructor({ x, y }: XY, slope: XY) {
    super(x, y, 20, 20);
    this.speed = 5;
    this.velocity = { x: slope.x / this.speed, y: slope.y / this.speed };
    this.id = count++;
    this.currAction = 'idle';
    this.spriteIdx = 0;
  }

  draw(c: CanvasRenderingContext2D) {
    c.drawImage(
      bulletSprites[this.currAction][this.spriteIdx],
      this.x - this.width / 2,
      this.y,
      this.width,
      this.height
    );
  }

  updatePosition() {
    this.x += this.velocity.x;
    this.y += this.velocity.y;
  }

  increaseSpriteIdx() {
    this.spriteIdx++;
  }

  resetSpriteIdx(override?: 'override') {
    if (
      this.spriteIdx === bulletSprites[this.currAction].length - 1 ||
      override
    )
      this.spriteIdx = 0;
  }

  updateAction(action: Action) {
    if (action !== this.currAction) this.resetSpriteIdx('override');
    this.currAction = action;
  }
}
