export const editGestures2 = {
  edit2: {
    operator: [
      {
        id: 1,
        name: "delete",
        type: "Operation",
        length: 4,
        path: [
          ["Right", "Right", "Right", "Up"],
          ["Right", "Right", "Right", "Down"],
          ["Left", "Left", "Left", "Up"],
          ["Left", "Left", "Left", "Down"],
        ],
        // normalisedPositions: [
        //   { x: 3, y: 2 },
        //   { x: 2, y: 2 },
        //   { x: 1, y: 2 },
        //   { x: 1, y: 1 },
        // ],
      },
    ],
    motion: [
      {
        id: 1,
        name: "next",
        type: "Motion",
        length: 1,
        path: "Right",
        // normalisedPositions: [
        //   { x: 2, y: 2 },
        //   { x: 3, y: 2 },
        // ],
      },
      {
        id: 2,
        name: "previous",
        type: "Motion",
        length: 1,
        path: "Left",
        // normalisedPositions: [
        //   { x: 2, y: 2 },
        //   { x: 1, y: 2 },
        // ],
      },
      {
        id: 3,
        name: "up",
        type: "Motion",
        length: 1,
        path: "Up",
        // normalisedPositions: [
        //   { x: 2, y: 3 },
        //   { x: 2, y: 2 },
        // ],
      },
      {
        id: 4,
        name: "down",
        type: "Motion",
        length: 1,
        path: "Down",
        // normalisedPositions: [
        //   { x: 2, y: 1 },
        //   { x: 2, y: 2 },
        // ],
      },
    ],
    allTypes: ["operator", "motion"],
    allPaths: [
      {
        name: "delete",
        type: "Operation",
        length: 4,
        path: ["Right", "Right", "Right", "Up"],
      },
      {
        name: "delete",
        type: "Operation",
        length: 4,
        path: ["Right", "Right", "Right", "Down"],
      },
      {
        name: "delete",
        type: "Operation",
        length: 4,
        path: ["Left", "Left", "Left", "Up"],
      },
      {
        name: "delete",
        type: "Operation",
        length: 4,

        path: ["Left", "Left", "Left", "Down"],
      },
      {
        name: "next",
        type: "Motion",
        length: 1,
        path: ["Right"],
        id: 1,
      },
      {
        name: "previous",
        type: "Motion",
        length: 1,
        path: ["Left"],
        id: 2,
      },
      {
        name: "up",
        type: "Motion",
        length: 1,
        path: ["Up"],
        id: 3,
      },
      {
        name: "down",
        type: "Motion",
        length: 1,
        path: ["Down"],
        id: 4,
      },
    ],
  },
};
