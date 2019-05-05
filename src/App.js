import React, { Component } from "react";
import Interface from "./interface/Interface";
import { setCSSCustomProperty } from "./utils";
import { preventRefreshOnMobile } from "./utils";
import "./App.css";

class App extends Component {
  componentWillMount() {
    setCSSCustomProperty();
    preventRefreshOnMobile();
  }
  render() {
    return <Interface />;
  }
}

export default App;
