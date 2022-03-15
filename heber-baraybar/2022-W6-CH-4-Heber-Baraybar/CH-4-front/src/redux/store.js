import { createStore } from "redux";
import { counterReducer } from "./counter/counter-reducer";

export const store = createStore(counterReducer, window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION());
