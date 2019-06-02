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
  const [gesture, setGesture] = React.useState([]);
  const [count, setCount] = React.useState(0);
  const [mode, setMode] = React.useState("Motion");

  useAnimationFrame(() => {
    setCount(count + 1);
  });

  return (
    <div className="interface">
      <img src={logo} alt="" />
      <InterfaceProvider>
        <Header />
        <Views>
          {/* <Sidebar interfaceGesture={interfaceGesture} /> */}
          <CodeEditor mode={mode} gesture={gesture} />
          <GesturePad
            mode={mode}
            count={count}
            gesture={gesture}
            setGesture={gesture => {
              setMode(gesture.type);
              setGesture(gesture);
            }}
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
