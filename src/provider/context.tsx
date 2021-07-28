import React, { createContext, useReducer } from "react";
import { gestureReducer, initialState } from "./reducer";
import { Context, GestureProviderProps } from "./types";

const GestureContext = createContext<Context>(undefined as never);

function GestureProvider({ children }: GestureProviderProps) {
  const [state, dispatch] = useReducer(gestureReducer, initialState);
  const value = { state, dispatch };

  return (
    <GestureContext.Provider value={value}>{children}</GestureContext.Provider>
  );
}

export { GestureProvider, GestureContext };
