export const editPatterns = {
  edit: {
    navigate: {
      moveUp: {
        type: "navigate",
        pattern: [{ direction: "Up", magnitude: 2 }],
        command: "moveUp"
      },
      moveDown: {
        type: "navigate",
        pattern: [{ direction: "Down", magnitude: 2 }],
        command: "moveDown"
      },
      moveLeft: {
        type: "navigate",
        pattern: [{ direction: "Left", magnitude: 2 }],
        command: "moveLeft"
      },
      moverRight: {
        type: "navigate",
        pattern: [{ direction: "Right", magnitude: 2 }],
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
        type: "navigate",
        pattern: [{ direction: "Up", magnitude: 2 }],
        command: "moveUp"
      },
      {
        type: "navigate",
        pattern: [{ direction: "Down", magnitude: 2 }],
        command: "moveDown"
      },
      {
        type: "navigate",
        pattern: [{ direction: "Left", magnitude: 2 }],
        command: "moveLeft"
      },
      {
        type: "navigate",
        pattern: [{ direction: "Right", magnitude: 2 }],
        command: "moverRight"
      }
    ]
  }
};
