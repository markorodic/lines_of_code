import React, { Component } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/theme/neat.css";
import "codemirror/mode/xml/xml.js";
import "codemirror/mode/javascript/javascript.js";

import { Controlled as CodeMirror } from "react-codemirror2";

class CodeEditor extends Component {
  state = {
    value: `const arr = ['foo', 'bar', 'baz'] \n\narr.forEach((word) => console.log(word))`
  };
  instance;
  componentDidMount() {
    this.instance.markText(
      { line: 0, ch: 5 },
      { line: 2, ch: 4 },
      { readOnly: true, className: "selected-text" }
    );
  }
  render() {
    return (
      <div className="code">
        <CodeMirror
          value={this.state.value}
          options={{ lineNumbers: true, autofocus: true }}
          onBeforeChange={(editor, data, value) => {
            this.setState({ value });
          }}
          onChange={(editor, value) => {
            console.log("controlled", { value });
          }}
          editorDidMount={editor => {
            this.instance = editor;
          }}
          className={"code-editor"}
        />
      </div>
    );
  }
}

export default CodeEditor;
