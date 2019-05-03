import { createStore, applyMiddleware, compose } from "redux";
import RootReducer from "./RootReducer";
import createSagaMiddleware from "redux-saga";
import SagaWorkers from "./Sagas.js";

// export let store;

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

// export default function configureStore() {
const sagaMiddleware = createSagaMiddleware();
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
//   store = createStore(RootReducer, initialState, enhancer);
//   sagaMiddleware.run(SagaWorkers);
// }

// configureStore();

export const store = state => createStore(RootReducer, state, enhancer);
