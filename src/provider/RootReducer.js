import reduceReducers from "reduce-reducers";
import gesturePadReducer from "../interface/gesturePad/GesturePad.reducer";

const RootReducer = reduceReducers({}, gesturePadReducer);

export default RootReducer;
