import { pointerPosition, gridPosition } from "./GesturePadHelpers";
import cases from "jest-in-case";

describe("pointerPosition", () => {
  cases(
    "should get the relative mouse position",
    opts => {
      expect(
        pointerPosition(
          opts.augpositionx,
          opts.augpositiony,
          opts.augparentx,
          opts.augparenty
        )
      ).toEqual(opts.result);
    },
    [
      {
        name: "when container is larger",
        augpositionx: 540,
        augpositiony: 590,
        augparentx: 500,
        augparenty: 500,
        result: { x: 40, y: 90 }
      }
    ],
    [
      {
        name: "when container is smaller",
        augpositionx: 140,
        augpositiony: 90,
        augparentx: 0,
        augparenty: 0,
        result: { x: 140, y: 90 }
      }
    ]
  );
});

describe("gridPosition", () => {
  cases(
    "should get the box position within the grid",
    opts => {
      expect(
        gridPosition(opts.position, opts.augwidth, opts.augheight)
      ).toEqual(opts.result);
    },
    [
      {
        name: "{0, 0}",
        position: { x: 6, y: 9 },
        augwidth: 500,
        augheight: 500,
        result: { x: 0, y: 0 }
      }
    ]
  );
});
