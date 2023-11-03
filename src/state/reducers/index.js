import { combineReducers } from "redux";
import numberReducer from "./numberReducer";

const reducers = combineReducers({
  amount: numberReducer,
});

export default reducers;
