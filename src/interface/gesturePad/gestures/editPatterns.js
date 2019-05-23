export const editGestures = {
  edit: {
    operator: {
      delete: {
        id: 1,
        name: "delete",
        type: "Operation",
        length: 4,
        path: [
          ["Right", "Right", "Right", "Up"],
          ["Right", "Right", "Right", "Down"],
          ["Left", "Left", "Left", "Up"],
          ["Left", "Left", "Left", "Down"]
        ],
        normalisedPositions: [
          { x: 3, y: 2 },
          { x: 2, y: 2 },
          { x: 1, y: 2 },
          { x: 1, y: 1 }
        ]
      },
      yank: {
        id: 2,
        name: "yank",
        type: "Operation",
        length: 5,
        path: [
          ["Left", "Left", "Down", "Down", "Right"],
          ["Left", "Left", "Up", "Up", "Right"],
          ["Right", "Right", "Down", "Down", "Left"],
          ["Right", "Right", "Up", "Up", "Left"]
        ],
        normalisedPositions: [
          { x: 3, y: 1 },
          { x: 2, y: 1 },
          { x: 2, y: 2 },
          { x: 2, y: 3 },
          { x: 3, y: 3 }
        ]
      },
      all: [
        { name: "delete", path: ["Right", "Right", "Up"] },
        { name: "delete", path: ["Left", "Left", "Up"] }
      ]
    },
    motion: {
      next: {
        id: 1,
        name: "next",
        type: "Motion",
        length: 1,
        path: "Right",
        normalisedPositions: [{ x: 2, y: 2 }, { x: 3, y: 2 }]
      },
      previous: {
        id: 2,
        name: "previous",
        type: "Motion",
        length: 1,
        path: "Left",
        normalisedPositions: [{ x: 2, y: 2 }, { x: 1, y: 2 }]
      },
      up: {
        id: 3,
        name: "up",
        type: "Motion",
        length: 1,
        path: "Up",
        normalisedPositions: [{ x: 2, y: 3 }, { x: 2, y: 2 }]
      },
      down: {
        id: 4,
        name: "down",
        type: "Motion",
        length: 1,
        path: "Down",
        normalisedPositions: [{ x: 2, y: 1 }, { x: 2, y: 2 }]
      },
      all: [
        {
          name: "up",
          path: "Up"
        },
        {
          name: "down",
          path: "Down"
        },
        {
          name: "next",
          path: "Right"
        },
        {
          name: "previous",
          path: "Left"
        }
      ]
    },
    object: [
      {
        name: "Comment",
        type: "Object",
        length: 6,
        path: ["Down", "Down", "Down", "Right", "Up", "Up"],
        normalisedPositions: [
          { x: 1, y: 3 },
          { x: 1, y: 2 },
          { x: 1, y: 3 },
          { x: 2, y: 3 },
          { x: 2, y: 2 },
          { x: 2, y: 1 }
        ]
      }
    ],
    allEditPaths: [
      {
        name: "delete",
        type: "operator",
        length: 4,
        path: ["Right", "Right", "Right", "Up"]
      },
      {
        name: "delete",
        type: "operator",
        length: 4,
        path: ["Right", "Right", "Right", "Down"]
      },
      {
        name: "delete",
        type: "operator",
        length: 4,
        path: ["Left", "Left", "Left", "Up"]
      },
      {
        name: "delete",
        type: "operator",
        length: 4,

        path: ["Left", "Left", "Left", "Down"]
      },
      {
        name: "next",
        type: "motion",
        length: 1,
        path: ["Right"]
      },
      {
        name: "previous",
        type: "motion",
        length: 1,
        path: ["Left"]
      },
      {
        name: "up",
        type: "motion",
        length: 1,
        path: ["Up"]
      },
      {
        name: "down",
        type: "motion",
        length: 1,
        path: ["Down"]
      }
    ]
  }
};
