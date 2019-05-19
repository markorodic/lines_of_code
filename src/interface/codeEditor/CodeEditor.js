import React, { Component } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/theme/neat.css";
import "codemirror/mode/xml/xml.js";
import "codemirror/mode/javascript/javascript.js";
import { Controlled as CodeMirror } from "react-codemirror2";

function showRelativeLines(cm) {
  const lineNum = cm.getCursor().line + 1;
  if (cm.state.curLineNum === lineNum) {
    return;
  }
  cm.state.curLineNum = lineNum;
  cm.setOption("lineNumberFormatter", l =>
    l === lineNum ? lineNum : Math.abs(lineNum - l)
  );
}

class CodeEditor extends Component {
  state = {
    value: `Task 1 - Delete all comments\n------------------------------------\n// delete  commented lines\nconst arr = ['foo', 'bar', 'baz'] // like this one\nconst obj = { one: 1, two: 2, three: 3 }\n// and these...\n// two\nconst obj = { one: 1, two: 2, three: 3 }\n\n\nTask 2 - Change arrays to strings and\nobjects to integers\n------------------------------------\nconst arr = ['foo', 'bar', 'baz']\nconst anotherArr = ['foofoo', 'barbar',\n'bazbaz']\nconst obj = { one: 1, two: 2, three: 3 }\n\n\nTask 3 - Change arrays to strings and\nobjects to integers\n------------------------------------\nconst str = "foo\nconst anotherStr = "bar"\nconst int = 1\n\n\nFinal result\n------------------------------------\nconst int = 1\nconst str = "foo"\nconst anotherStr = "bar"\n\n\n`
  };
  instance;
  componentDidMount() {
    this.instance.on("cursorActivity", showRelativeLines);
    var t = this.instance.charCoords({ line: 6, ch: 0 }, "local").top;
    var middleHeight = this.instance.getScrollerElement().offsetHeight / 2;
    this.instance.scrollTo(null, t - middleHeight - 5);
    // this.instance.markText(
    //   { line: 0, ch: 5 },
    //   { line: 2, ch: 4 },
    //   { readOnly: true, className: "selected-text" }
    // );
    // this.instance.markText(
    //   { line: 0, ch: 0 },
    //   { line: 7, ch: 99 },
    //   { readOnly: true, className: "current-task" }
    // );
  }
  render() {
    return (
      <div className="code">
        <CodeMirror
          value={this.state.value}
          options={{ lineNumbers: true, autofocus: true, lineWrapping: true }}
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
