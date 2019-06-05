import React from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/theme/neat.css";
import "codemirror/mode/xml/xml.js";
import "codemirror/mode/javascript/javascript.js";
import { UnControlled as CodeMirror } from "react-codemirror2";
import { initialCodeState } from "./initialCode";
import {
  useMarkGutter,
  useMarkCursor,
  useExecuteCommand
} from "./CodeEditor.customHooks";
import { useInterfaceState } from "../Interface.customHooks";
import { useCursorPosition } from "./CodeEditor.customHooks";

function CodeEditor(props) {
  const [editor, setEditor] = React.useState(null);
  const { gesture, gestureActive } = useInterfaceState();
  const cursorPosition = useCursorPosition(editor, gestureActive);

  useExecuteCommand(editor, gesture);
  useMarkGutter(editor, cursorPosition);
  useMarkCursor(editor, cursorPosition, gesture, props);

  return (
    <div className="code">
      <CodeMirror
        value={initialCodeState}
        options={{
          lineNumbers: true,
          autofocus: true,
          lineWrapping: true,
          gutters: ["CodeMirror-linenumbers", "position"]
        }}
        onChange={() => {}}
        editorDidMount={editor => {
          setEditor(editor);
        }}
        className={"code-editor"}
      />
    </div>
  );
}

export default CodeEditor;
