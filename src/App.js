import React, { Component } from "react";
import Interface from "./interface/Interface";
import AST from "./ast/AST";
import { setCSSCustomProperty } from "./utils";
import { preventRefreshOnMobile } from "./utils";
import "./App.css";

function App() {
  React.useEffect(() => {
    setCSSCustomProperty();
    preventRefreshOnMobile();
  });

  return <Interface />;
}

export default App;
