// import {
//   getUserPosition,
//   getGridPosition,
//   gridPosition
// } from "./GesturePadHelpers";
// import cases from "jest-in-case";

// describe("getUserPosition", () => {
//   cases(
//     "should get the relative mouse position",
//     opts => {
//       expect(
//         getUserPosition(opts.augpositionuser, opts.augparentx, opts.augparenty)
//       ).toEqual(opts.result);
//     },
//     [
//       {
//         name: "when container is larger",
//         augpositionuser: { x: 540, y: 590 },
//         augparentx: 500,
//         augparenty: 500,
//         result: { x: 40, y: 90 }
//       }
//     ],
//     [
//       {
//         name: "when container is smaller",
//         augpositionuser: { x: 540, y: 590 },
//         augparentx: 0,
//         augparenty: 0,
//         result: { x: 140, y: 90 }
//       }
//     ]
//   );
// });

// describe("getGridPosition", () => {
//   cases(
//     "should get the box position within the grid",
//     opts => {
//       expect(getGridPosition(opts.augposition, opts.augcontainer)).toEqual(
//         opts.result
//       );
//     },
//     [
//       {
//         name: "{0, 0}",
//         augposition: { x: 251, y: 253 },
//         augcontainer: {
//           containerX: 250,
//           containerY: 250,
//           containerWidth: 500,
//           containerHeight: 500
//         },
//         result: { x: 0, y: 0 }
//       }
//     ]
//   );
// });

// describe("gridPosition", () => {
//   cases(
//     "should get the box position within the grid",
//     opts => {
//       expect(
//         gridPosition(
//           opts.augposition,
//           opts.containerWidth,
//           opts.containerHeight
//         )
//       ).toEqual(opts.result);
//     },
//     [
//       {
//         name: "{0, 0}",
//         augposition: { x: 6, y: 5 },
//         containerWidth: 500,
//         containerHeight: 500,
//         result: { x: 0, y: 0 }
//       }
//     ]
//   );
// });
