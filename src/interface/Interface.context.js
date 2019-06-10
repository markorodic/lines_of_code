import React from "react";
import InterfaceReducer from "./Interface.reducer";
import { useAnimationFrame } from "./Interface.customHooks";
import { INCREMENT_COUNT } from "./Interface.actions";

const InterfaceStateContext = React.createContext();
const InterfaceDispatchContext = React.createContext();

const initialState = {
  gesture: {},
  combination: [],
  mode: "Motion",
  userActive: false,
  gestureActive: false,
  count: 0
};

function InterfaceProvider({ children }) {
  const [state, dispatch] = React.useReducer(InterfaceReducer, initialState);

  useAnimationFrame(() => {
    setUserActive();
  });

  const setUserActive = () => dispatch({ type: INCREMENT_COUNT });

  return (
    <InterfaceStateContext.Provider value={state}>
      <InterfaceDispatchContext.Provider value={dispatch}>
        {children}
      </InterfaceDispatchContext.Provider>
    </InterfaceStateContext.Provider>
  );
}

export { InterfaceProvider, InterfaceStateContext, InterfaceDispatchContext };
