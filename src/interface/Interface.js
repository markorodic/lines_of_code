import React, { Component } from "react";
import "./Interface.css";
import logo from "../assets/logo.svg";
import Header from "./header/Header";
import CodeEditor from "./codeEditor/CodeEditor";
import GesturePad from "./gesturePad/GesturePad";
import { InterfaceProvider } from "./Interface.context";

export default function Interface() {
  return (
    <div className="interface">
      <img src={logo} alt="" />
      <InterfaceProvider>
        <Header />
        <section className="view">
          <CodeEditor />
          <GesturePad />
        </section>
      </InterfaceProvider>
    </div>
  );
}
