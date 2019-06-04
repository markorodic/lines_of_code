import React from "react";
import InterfaceReducer from "./Interface.reducer";

const InterfaceStateContext = React.createContext();
const InterfaceDispatchContext = React.createContext();

const initialState = {
  gesture: {},
  mode: "Motion",
  userActive: false,
  gestureActive: false
};

function InterfaceProvider({ children }) {
  const [state, dispatch] = React.useReducer(InterfaceReducer, initialState);

  return (
    <InterfaceStateContext.Provider value={state}>
      <InterfaceDispatchContext.Provider value={dispatch}>
        {children}
      </InterfaceDispatchContext.Provider>
    </InterfaceStateContext.Provider>
  );
}

export { InterfaceProvider, InterfaceStateContext, InterfaceDispatchContext };
