import React, { Component } from "react";
import Header from "./header/Header";
import CodeEditor from "./codeEditor/CodeEditor";
import GesturePad from "./gesturePad/GesturePad";
import "./Interface.css";
import logo from "../logo.svg";
import { InterfaceProvider } from "./Interface.context";
import Sidebar from "./sidebar/Sidebar";
import { useAnimationFrame } from "./Interface.customHooks";

export function getElementProperties(element) {
  return element.current.getBoundingClientRect();
}

export default function Interface() {
  const [gestureActive, setGestureActive] = React.useState(false);
  const [userActive, setUserActive] = React.useState(false);
  const [interfaceGesture, setInterfaceGesture] = React.useState({});
  const [count, setCount] = React.useState(0);

  useAnimationFrame(() => {
    setCount(count + 1);
  });

  return (
    <div className="interface">
      <img src={logo} alt="" />
      <InterfaceProvider>
        <Header gestureActive={gestureActive} userActive={userActive} />
        <Views>
          {/* <Sidebar interfaceGesture={interfaceGesture} /> */}
          <CodeEditor
            userActive={userActive}
            gestureActive={gestureActive}
            interfaceGesture={interfaceGesture}
          />
          <GesturePad
            count={count}
            gestureActive={gestureActive}
            setGestureActive={setGestureActive}
            userActive={userActive}
            setUserActive={setUserActive}
            setInterfaceGesture={setInterfaceGesture}
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
