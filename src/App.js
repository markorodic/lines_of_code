import React, { useEffect } from "react";
import { setViewHeightProperty, preventRefreshOnMobile } from "./utils";
import logo from "./assets/logo.svg";
import Header from "./components/header";
import Editor from "./components/editor";
import Gesture from "./components/gesture";
import { GestureProvider } from "./provider/context";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 60rem;
  height: 39rem;
  box-shadow: 2px 2px 15px #dadada;

  @media (max-width: 500px) {
    margin: 0;
    height: 100%;
    width: 100%;
  }
`;

const Image = styled.img`
  position: absolute;
  top: 1rem;
  left: 1rem;
  @media (max-width: 500px) {
    display: none;
  }
`;

const Interface = styled.section`
  width: 60rem;
  height: 35rem;
  display: flex;
  @media (max-width: 500px) {
    display: flex;
    flex-wrap: wrap;
    height: 98vh;
    width: 100%;
  }
`;

const App = () => {
  useEffect(() => {
    setViewHeightProperty();
    preventRefreshOnMobile();
  }, []);

  return (
    <Container>
      <Image src={logo} alt="" />
      <GestureProvider>
        <Header />
        <Interface>
          <Editor />
          <Gesture />
        </Interface>
      </GestureProvider>
    </Container>
  );
};

export default App;
