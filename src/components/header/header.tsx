import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  background: #171717;
  position: relative;
  height: 4rem;
  width: 60rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 500px) {
    width: 100%;
    height: 20vw;
  }
`;

const Title = styled.h1`
  font-size: 0.8rem;
  color: #f7f7f7;
  text-transform: uppercase;
`;

function Header() {
  return (
    <Container>
      <Title>Gesture editor</Title>
    </Container>
  );
}

export default Header;
