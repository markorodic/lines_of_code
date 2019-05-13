export const editPatterns = {
  edit: [
    {
      type: "navigate",
      pattern: ["Left", "Left", "Left"],
      command: "moveToStartOfLine"
    },
    {
      type: "navigate",
      pattern: ["Up", "Up"],
      command: "moveUp"
    },
    {
      type: "navigate",
      pattern: ["Down", "Down"],
      command: "moveDown"
    },
    {
      type: "navigate",
      pattern: ["Left", "Left"],
      command: "moveLeft"
    },
    {
      type: "navigate",
      pattern: ["Right", "Right"],
      command: "moverRight"
    }
  ]
};
