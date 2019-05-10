export const editPatterns = {
  navigate: {
    moveUp: {
      type: "navigate",
      pattern: [{ direction: "U", magnitude: 2 }],
      command: "moveUp"
    },
    moveDown: {
      type: "navigate",
      pattern: [{ direction: "D", magnitude: 2 }],
      command: "moveDown"
    },
    moveLeft: {
      type: "navigate",
      pattern: [{ direction: "L", magnitude: 2 }],
      command: "moveLeft"
    },
    moverRight: {
      type: "navigate",
      pattern: [{ direction: "R", magnitude: 2 }],
      command: "moverRight"
    }
  },
  insert: {},
  delete: {},
  copy: {},
  paste: {},
  change: {},
  cut: {},
  allPatterns: [
    {
      moveUp: {
        type: "navigate",
        pattern: ["UU"],
        command: "moveUp"
      }
    },
    {
      moveDown: {
        type: "navigate",
        pattern: ["DD"],
        command: "moveDown"
      }
    },
    {
      moveLeft: {
        type: "navigate",
        pattern: ["LL"],
        command: "moveLeft"
      }
    },
    {
      moverRight: {
        type: "navigate",
        pattern: ["RR"],
        command: "moverRight"
      }
    }
  ]
};
