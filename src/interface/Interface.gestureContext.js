import React from "react";
import InterfaceReducer from "./Interface.reducer";

const InterfaceGestureStateContext = React.createContext();
const InterfaceGestureDispatchContext = React.createContext();

const initialState = {
  gesture: {},
  combination: [],
  mode: "Motion",
  userActive: false,
  gestureActive: false
};

function InterfaceGestureProvider({ children }) {
  const [state, dispatch] = React.useReducer(InterfaceReducer, initialState);

  return (
    <InterfaceGestureStateContext.Provider value={state}>
      <InterfaceGestureDispatchContext.Provider value={dispatch}>
        {children}
      </InterfaceGestureDispatchContext.Provider>
    </InterfaceGestureStateContext.Provider>
  );
}

export {
  InterfaceGestureProvider,
  InterfaceGestureStateContext,
  InterfaceGestureDispatchContext
};
