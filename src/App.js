import React, { Component } from "react";
import { Provider } from "react-redux";
import { store } from "./provider/Store";
import Interface from "./interface/Interface";
import { setCSSCustomProperty } from "./utils";
import { preventRefreshOnMobile } from "./utils";
import { initialState } from "./initialState";
import "./App.css";

class App extends Component {
  componentWillMount() {
    setCSSCustomProperty();
    preventRefreshOnMobile();
  }
  render() {
    return (
      <Provider store={store(initialState)}>
        <Interface />
      </Provider>
    );
  }
}

export default App;
