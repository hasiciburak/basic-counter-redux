import { combineReducers } from "redux";
import { counterReducer } from "./counter-reducer";
const allReducers = combineReducers({
  counterReducer,
});

export default allReducers;
