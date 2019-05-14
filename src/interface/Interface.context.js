import React from "react";
import InterfaceReducer from "./Interface.reducer";
import {
  INCREMENT_COUNT,
  GESTURE_ACTIVE,
  GESTURE_INACTIVE,
  USER_ACTIVE,
  USER_INACTIVE
} from "./Interface.actions";
import { useAnimationFrame } from "./Interface.customHooks";

const InterfaceContext = React.createContext();

const initialState = {
  count: 0,
  userActive: false,
  gestureActive: false
};

function InterfaceProvider(props) {
  const [state, dispatch] = React.useReducer(InterfaceReducer, initialState);

  const incrementCount = () => dispatch({ type: INCREMENT_COUNT });
  const setUserActive = () => dispatch({ type: USER_ACTIVE });
  const setUserInactive = () => dispatch({ type: USER_INACTIVE });
  const setGestureActive = () => dispatch({ type: GESTURE_ACTIVE });
  const setGestureInactive = () => dispatch({ type: GESTURE_INACTIVE });
  const { count, userActive, gestureActive } = state;
  const value = React.useMemo(() => {
    return {
      count,
      userActive,
      gestureActive,
      setGestureActive,
      setGestureInactive,
      setUserActive,
      setUserInactive
    };
  }, [state]);

  useAnimationFrame(() => {
    incrementCount();
  });

  return <InterfaceContext.Provider value={value} {...props} />;
}

export { InterfaceProvider, InterfaceContext };

// import React from "react";
// const CountContext = React.createContext();
// function CountProvider(props) {
//   const [count, setCount] = React.useState(0);
//   const value = React.useMemo(() => {
//     return {
//       count,
//       setCount
//     };
//   }, [count]);
//   return <CountContext.Provider value={value} {...props} />;
// }

// export { CountProvider, CountContext };
