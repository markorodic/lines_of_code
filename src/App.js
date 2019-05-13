import React, { Component } from "react";
import Interface from "./interface/Interface";
import { setCSSCustomProperty } from "./utils";
import { preventRefreshOnMobile } from "./utils";
import logo from "./splash-logo.svg";
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
    return <Interface />;
  }
}

function SplashScreen(props) {
  return (
    <div className="splash-screen">
      <img src={logo} alt="" />{" "}
    </div>
  );
}

export default App;
