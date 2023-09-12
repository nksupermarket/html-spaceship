import Entity from "./Entity";

import idle01 from "../../assets/bullet/optimized/Idle/Bullet_Idle_01.png";
import idle03 from "../../assets/bullet/optimized/Idle/Bullet_Idle_03.png";
import idle02 from "../../assets/bullet/optimized/Idle/Bullet_Idle_02.png";
import idle04 from "../../assets/bullet/optimized/Idle/Bullet_Idle_04.png";
import idle05 from "../../assets/bullet/optimized/Idle/Bullet_Idle_05.png";
import idle06 from "../../assets/bullet/optimized/Idle/Bullet_Idle_06.png";
import idle07 from "../../assets/bullet/optimized/Idle/Bullet_Idle_07.png";

import poof01 from "../../assets/bullet/optimized/Poof/Bullet_Poof_01.png";
import poof02 from "../../assets/bullet/optimized/Poof/Bullet_Poof_02.png";
import poof03 from "../../assets/bullet/optimized/Poof/Bullet_Poof_03.png";
import poof04 from "../../assets/bullet/optimized/Poof/Bullet_Poof_04.png";
import poof05 from "../../assets/bullet/optimized/Poof/Bullet_Poof_05.png";
import poof06 from "../../assets/bullet/optimized/Poof/Bullet_Poof_06.png";
import poof07 from "../../assets/bullet/optimized/Poof/Bullet_Poof_07.png";
import { Deactive } from "../../../types/types";
import { createImageBlob } from "../../utils/misc";
import { XY } from "../../../types/interfaces";

let count = 0;

type ActiveBulletSprites = {
  idle: ImageBitmap[];
  poof: ImageBitmap[];
};
let bulletSprites: ActiveBulletSprites | Deactive<ActiveBulletSprites> = {
  idle: null,
  poof: null,
};
export const activateBulletSprites = async () => {
  bulletSprites = {
    idle: [
      await createImageBitmap(await createImageBlob(idle01)),
      await createImageBitmap(await createImageBlob(idle02)),
      await createImageBitmap(await createImageBlob(idle03)),
      await createImageBitmap(await createImageBlob(idle04)),
      await createImageBitmap(await createImageBlob(idle05)),
      await createImageBitmap(await createImageBlob(idle06)),
      await createImageBitmap(await createImageBlob(idle07)),
    ],
    poof: [
      await createImageBitmap(await createImageBlob(poof01)),
      await createImageBitmap(await createImageBlob(poof02)),
      await createImageBitmap(await createImageBlob(poof03)),
      await createImageBitmap(await createImageBlob(poof04)),
      await createImageBitmap(await createImageBlob(poof05)),
      await createImageBitmap(await createImageBlob(poof06)),
      await createImageBitmap(await createImageBlob(poof07)),
    ],
  };
};

type Action = keyof typeof bulletSprites;

export default class Bullet extends Entity {
  id: number;
  speed: number;
  currAction: Action;
  spriteIdx: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  status: "alive" | "dieing" | "dead";
  velocity: XY;

  constructor({ x, y }: XY, slope: XY) {
    super(x, y, 20, 20);
    this.speed = 8;
    this.velocity = { x: slope.x * this.speed, y: slope.y * this.speed };
    this.id = count++;
    this.currAction = "idle";
    this.spriteIdx = 0;
    this.status = "alive";
  }

  draw(c: CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D) {
    if (this.status === "dead") return;
    c.drawImage(
      (bulletSprites as ActiveBulletSprites)[this.currAction][this.spriteIdx],
      this.x - this.width / 2,
      this.y - this.height / 2,
      this.width,
      this.height
    );
    this.resetSpriteIdx();
    this.increaseSpriteIdx();
  }

  updatePosition() {
    this.x += this.velocity.x;
    this.y += this.velocity.y;
  }

  increaseSpriteIdx() {
    this.spriteIdx++;
  }

  resetSpriteIdx(override?: "override") {
    if (
      this.spriteIdx ===
        (bulletSprites as ActiveBulletSprites)[this.currAction].length - 1 ||
      override
    )
      this.spriteIdx = 0;
  }

  updateAction(action: Action) {
    if (action !== this.currAction) this.resetSpriteIdx("override");
    this.currAction = action;
  }

  update(bounds: XY) {
    if (this.x < 0 || this.x > bounds.x || this.y < 0 || this.y > bounds.y) {
      this.status = "dead";
      return;
    }
    switch (this.status) {
      case "alive":
        this.updatePosition();
        break;
      case "dieing": {
        if (
          this.spriteIdx ===
          (bulletSprites as ActiveBulletSprites)[this.currAction].length - 1
        )
          this.status = "dead";
        break;
      }
    }
  }

  onHit() {
    this.updateAction("poof");
    this.status = "dieing";
  }

  getCenter() {
    return {
      x: this.x + this.width / 2,
      y: this.y + this.height / 2,
    };
  }
}
