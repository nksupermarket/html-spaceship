import Entity from "../src/classes/entities/Entity";
import { closeEnoughForCollision } from "../src/utils/closeEnoughForCollision";

it("works", () => {
  const e1 = new Entity(0, 0, 100, 200);
  const e2 = new Entity(200, 200, 100, 200);

  expect(closeEnoughForCollision(e1, e2, 300)).toBe(true);
});
