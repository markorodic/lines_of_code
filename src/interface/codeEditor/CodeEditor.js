import React, { Component } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/theme/neat.css";
import "codemirror/mode/xml/xml.js";
import "codemirror/mode/javascript/javascript.js";

import { Controlled as CodeMirror } from "react-codemirror2";

class CodeEditor extends Component {
  state = {
    value: "123"
  };
  render() {
    return (
      <div className="code">
        <p>Code</p>

        <CodeMirror
          value={this.state.value}
          options={{ lineNumbers: true, autofocus: true }}
          onBeforeChange={(editor, data, value) => {
            this.setState({ value });
          }}
          onChange={(editor, value) => {
            console.log("controlled", { value });
          }}
        />
      </div>
    );
  }
}

export default CodeEditor;
