export const gesturePatterns = [
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
  },
  {
    name: "previous",
    type: "Motion",
    length: 1,
    path: ["Left"],
  },
  {
    name: "up",
    type: "Motion",
    length: 1,
    path: ["Up"],
  },
  {
    name: "down",
    type: "Motion",
    length: 1,
    path: ["Down"],
  },
];
