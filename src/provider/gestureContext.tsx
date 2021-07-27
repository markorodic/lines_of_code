import React, { createContext, useReducer } from "react";
import { gestureReducer, initialState, State } from "./reducer";
import { Dispatch } from "./actions";

export interface Context {
  state: State;
  dispatch: Dispatch;
}

type GestureProviderProps = { children: React.ReactNode };

// Q.1 Typeing the context: { state: State; dispatch: Dispatch } | undefined
// A. createContext requires an arg, but the default value for the context is
// passed on line 24 with value.
const GestureContext = createContext<{ state: State; dispatch: Dispatch }>(
  undefined as never,
);

function GestureProvider({ children }: GestureProviderProps) {
  const [state, dispatch] = useReducer(gestureReducer, initialState);
  const value = { state, dispatch };

  return (
    <GestureContext.Provider value={value}>{children}</GestureContext.Provider>
  );
}

export { GestureProvider, GestureContext };
