import React, { Component } from "react";
import "./Interface.css";
import logo from "../logo.svg";
import Header from "./header/Header";
import CodeEditor from "./codeEditor/CodeEditor";
import GesturePad from "./gesturePad/GesturePad";
import Sidebar from "./sidebar/Sidebar";
import { InterfaceProvider } from "./Interface.context";
import { useAnimationFrame } from "./Interface.customHooks";

export default function Interface() {
  const [count, setCount] = React.useState(0);

  useAnimationFrame(() => {
    setCount(count + 1);
  });

  return (
    <div className="interface">
      <img src={logo} alt="" />
      <InterfaceProvider>
        <Header />
        <Views>
          <CodeEditor />
          <GesturePad count={count} />
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
