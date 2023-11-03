import { createStore } from "redux";
import reducers from "./reducers";

const store = createStore(reducers);

window.REDUX_STORE = store;

export default store;
