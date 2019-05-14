import React, { Component } from "react";
import Header from "./header/Header";
import CodeEditor from "./codeEditor/CodeEditor";
import GesturePad from "./gesturePad/GesturePad";
import "./Interface.css";
import logo from "../logo.svg";
import { InterfaceProvider } from "./Interface.context";

export function getElementProperties(element) {
  return element.current.getBoundingClientRect();
}

export default function Interface() {
  const [gestureActive, setgestureActive] = React.useState(false);
  const [userActive, setUserActive] = React.useState(false);

  return (
    <div className="interface">
      <img src={logo} alt="" />
      <InterfaceProvider>
        <Header gestureActive={gestureActive} userActive={userActive} />
        <Views>
          <CodeEditor />
          <GesturePad
            gestureActive={gestureActive}
            setgestureActive={setgestureActive}
            userActive={userActive}
            setUserActive={setUserActive}
          />
        </Views>
      </InterfaceProvider>
    </div>
  );
}

class Views extends Component {
  render() {
    return <div className="views">{this.props.children}</div>;
  }
}
