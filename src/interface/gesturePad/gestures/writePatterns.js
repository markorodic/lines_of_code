export const writePatterns = {
  primitive: {
    string: {
      type: "write",
      pattern: [],
      action: ""
    }
  },
  dataStructure: {
    defineArray: {
      type: "write",
      pattern: ["LLDDRR"],
      action: "array"
    }
  },
  controlFlow: {
    function: {
      type: "conditional",
      pattern: ["RUUR"],
      action: "function"
    }
  },
  definition: {
    function: {
      type: "write",
      pattern: ["RUUR"],
      action: "function"
    }
  },
  iterator: {
    loop: {
      type: "write",
      pattern: ["RRDLUU"],
      action: "loop"
    }
  },
  methods: {
    print: {
      type: "write",
      pattern: ["LLUR"],
      action: "print"
    }
  },
  allPatterns: [
    {
      string: {
        type: "write",
        pattern: [],
        action: ""
      }
    }
  ]
};
