import React, { Component } from "react";
import Header from "./header/Header";
import CodeEditor from "./codeEditor/CodeEditor";
import GesturePad from "./gesturePad/GesturePad";
import "./Interface.css";

class Interface extends Component {
  render() {
    return (
      <div className="interface">
        <Header />
        <Views>
          <CodeEditor />
          <GesturePad />
        </Views>
      </div>
    );
  }
}

class Views extends Component {
  render() {
    return <div className="views">{this.props.children}</div>;
  }
}

export default Interface;
