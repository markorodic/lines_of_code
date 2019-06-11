import React from "react";
import { useAnimationFrame } from "./Interface.customHooks";

const InterfaceCountStateContext = React.createContext();

function InterfaceCountProvider({ children }) {
  const [count, setCount] = React.useState(0);

  // this is causing entire app to rerender on every tick
  useAnimationFrame(() => {
    setCount(count => count + 1);
  });

  return (
    <InterfaceCountStateContext.Provider value={count}>
      {children}
    </InterfaceCountStateContext.Provider>
  );
}

export { InterfaceCountProvider, InterfaceCountStateContext };
