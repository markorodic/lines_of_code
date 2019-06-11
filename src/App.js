import React, { Component } from "react";
import Interface from "./interface/Interface";
import AST from "./ast/AST";
import { setCSSCustomProperty } from "./utils";
import { preventRefreshOnMobile } from "./utils";
import "./App.css";

class App extends Component {
  state = {
    loading: false
  };
  componentWillMount() {
    setCSSCustomProperty();
    preventRefreshOnMobile();
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false
      });
    }, 2000);
  }
  render() {
    // while checking user session, show "loading" message
    if (this.state.loading) return SplashScreen();

    // otherwise, show the desired route
    return (
      <AST>
        <Interface />
      </AST>
    );
  }
}

function SplashScreen(props) {
  return <div className="splash-screen" />;
}

export default App;
