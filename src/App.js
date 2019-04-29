import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./provider/Store";

class App extends Component {
  render() {
    return <Entry />;
  }
}

const Entry = () => (
  <Provider store={store}>
    <Interface />
  </Provider>
);

const Interface = () => <div>Hello</div>;

export default App;
