import React, { Component } from "react";
import Interface from "./interface/Interface";
import { setCSSCustomProperty } from "./utils";
import { preventRefreshOnMobile } from "./utils";
import "./App.css";

// rework this to a function component with hooks
class App extends Component {
  componentWillMount() {
    // rework this function to not be a copy/paste job
    setCSSCustomProperty();
    // understand what is going on here
    preventRefreshOnMobile();
  }

  render() {
    return <Interface />;
  }
}

export default App;
