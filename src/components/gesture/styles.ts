import styled from "@emotion/styled";

export const Section = styled.section`
  width: 35rem;
  height: 35re;
  z-index: 10000;

  @media (max-width: 500px) {
    position: fixed;
    position: absolute;
    width: 100vw;
    height: 100vw;
    top: 100vh; /* Fallback for browsers that don't support Custom Properties */
    top: calc(var(--vh, 1vh) * 100 - 100vw);
    overflow-y: hidden;
    overscroll-behavior: none;
    touch-action: none;
    background: white;
  }
`;

export const Canvas = styled.canvas`
  width: 100%;
  height: 100%;
`;
