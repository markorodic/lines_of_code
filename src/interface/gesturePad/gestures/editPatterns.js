export const editGestures = {
  edit: [
    {
      name: "Delete",
      type: "operation",
      pattern: ["Right", "Right", "Up", "Right"],
      normalisedPath: [{ x: 3, y: 2 }, { x: 2, y: 2 }, { x: 1, y: 2 }]
    },
    {
      name: "Up",
      type: "motion",
      pattern: ["Up", "Up"],
      normalisedPath: [{ x: 2, y: 3 }, { x: 2, y: 2 }]
    },
    {
      name: "Down",
      type: "motion",
      pattern: ["Down", "Down"],
      normalisedPath: [{ x: 2, y: 1 }, { x: 2, y: 2 }]
    },
    {
      name: "Left",
      type: "motion",
      pattern: ["Left", "Left"],
      normalisedPath: [{ x: 2, y: 2 }, { x: 1, y: 2 }]
    },
    {
      name: "Right",
      type: "motion",
      pattern: ["Right", "Right"],
      normalisedPath: [{ x: 2, y: 2 }, { x: 3, y: 2 }]
    }
  ]
};
