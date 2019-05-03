import React from "react";
import { createStore } from "redux";
import { render } from "react-testing-library";
import { Provider } from "react-redux";
import RootReducer from "../provider/RootReducer";

export function renderWithRedux(
  component,
  { store = createStore(RootReducer, {}) } = {}
) {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store
  };
}
