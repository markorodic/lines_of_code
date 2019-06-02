import React from "react";
import InterfaceReducer from "./Interface.reducer";

const InterfaceStateContext = React.createContext();
const InterfaceDispatchContext = React.createContext();

const initialState = {
  gesture: null,
  mode: "Motion",
  userActive: false,
  gestureActive: false
};

// function InterfaceProvider(props) {
//   const [state, dispatch] = React.useReducer(InterfaceReducer, initialState);

//   const incrementCount = () => dispatch({ type: INCREMENT_COUNT });
//   const setUserActive = () => dispatch({ type: USER_ACTIVE });
//   const setUserInactive = () => dispatch({ type: USER_INACTIVE });
//   const setGestureActive = () => dispatch({ type: GESTURE_ACTIVE });
//   const setGestureInactive = () => dispatch({ type: GESTURE_INACTIVE });
//   const { count, userActive, gestureActive } = state;
//   const value = React.useMemo(() => {
//     return {
//       count,
//       userActive,
//       gestureActive,
//       setGestureActive,
//       setGestureInactive,
//       setUserActive,
//       setUserInactive
//     };
//   }, [state]);

//   return <InterfaceContext.Provider value={value} {...props} />;
// }

function InterfaceProvider({ children }) {
  const [state, dispatch] = React.useReducer(InterfaceReducer, initialState);

  // useAnimationFrame(() => {
  //   incrementCount();
  // });

  // const incrementCount = () => dispatch({ type: INCREMENT_COUNT });
  // const setUserActive = () => dispatch({ type: USER_ACTIVE });
  // const setUserInactive = () => dispatch({ type: USER_INACTIVE });
  // const setGestureActive = () => dispatch({ type: GESTURE_ACTIVE });
  // const setGestureInactive = () => dispatch({ type: GESTURE_INACTIVE });

  return (
    <InterfaceStateContext.Provider value={state}>
      <InterfaceDispatchContext.Provider value={dispatch}>
        {children}
      </InterfaceDispatchContext.Provider>
    </InterfaceStateContext.Provider>
  );
}

export { InterfaceProvider, InterfaceStateContext, InterfaceDispatchContext };
