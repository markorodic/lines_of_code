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
      change: {
        name: "change",
        type: "Operation",
        normalisedPositions: [
          { x: 3, y: 1 },
          { x: 2, y: 1 },
          { x: 2, y: 2 },
          { x: 2, y: 3 },
          { x: 3, y: 3 }
        ]
      },
      paste: {
        name: "paste",
        type: "Operation",
        normalisedPositions: [
          { x: 3, y: 1 },
          { x: 2, y: 1 },
          { x: 2, y: 2 },
          { x: 2, y: 3 },
          { x: 3, y: 3 }
        ]
      },
      cut: {
        name: "cut",
        type: "Operation",
        normalisedPositions: [
          { x: 3, y: 1 },
          { x: 2, y: 1 },
          { x: 2, y: 2 },
          { x: 2, y: 3 },
          { x: 3, y: 3 }
        ]
      },
      insert: {
        name: "insert",
        type: "Operation",
        normalisedPositions: [
          { x: 3, y: 1 },
          { x: 2, y: 1 },
          { x: 2, y: 2 },
          { x: 2, y: 3 },
          { x: 3, y: 3 }
        ]
      },
      names: ["change", "paste", "cut", "yank", "delete", "insert"],
      all: [
        {
          name: "change",
          path: ["Down", "Right", "Right", "Up", "Up", "Left"],
          type: "Operator"
        },
        {
          name: "change",
          path: ["Down", "Left", "Left", "Up", "Up", "Right"],
          type: "Operator"
        },
        {
          name: "paste",
          path: ["Up", "Up", "Right", "Down"],
          type: "Operator"
        },
        {
          name: "paste",
          path: ["Up", "Up", "Left", "Down"],
          type: "Operator"
        },
        {
          name: "cut",
          path: ["Up", "Left", "Left", "Down"],
          type: "Operator"
        },
        {
          name: "cut",
          path: ["Down", "Right", "Right", "Up"],
          type: "Operator"
        },
        {
          name: "copy",
          path: ["Left", "Down", "Down", "Right"],
          type: "Operator"
        },
        {
          name: "copy",
          path: ["Right", "Down", "Down", "Left"],
          type: "Operator"
        },
        {
          name: "copy",
          path: ["Right", "Up", "Up", "Left"],
          type: "Operator"
        },
        {
          name: "copy",
          path: ["Left", "Up", "Up", "Right"],
          type: "Operator"
        },
        { name: "delete", path: ["Right", "Right", "Up"], type: "Operator" },
        { name: "delete", path: ["Left", "Left", "Up"], type: "Operator" }
        // { name: "insert", path: ["Up", "Up", "Right"], type: "Operator" },
        // { name: "insert", path: ["Up", "Up", "Left"], type: "Operator" }
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
          id: 1,
          name: "next",
          type: "Motion",
          length: 1,
          path: ["Right"],
          normalisedPositions: [{ x: 2, y: 2 }, { x: 3, y: 2 }]
        },
        {
          id: 2,
          name: "previous",
          type: "Motion",
          length: 1,
          path: ["Left"],
          normalisedPositions: [{ x: 2, y: 2 }, { x: 1, y: 2 }]
        },
        {
          id: 3,
          name: "up",
          type: "Motion",
          length: 1,
          path: ["Up"],
          normalisedPositions: [{ x: 2, y: 3 }, { x: 2, y: 2 }]
        },
        {
          id: 4,
          name: "down",
          type: "Motion",
          length: 1,
          path: ["Down"],
          normalisedPositions: [{ x: 2, y: 1 }, { x: 2, y: 2 }]
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
    allTypes: ["operator", "motion"],
    allPaths: [
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
