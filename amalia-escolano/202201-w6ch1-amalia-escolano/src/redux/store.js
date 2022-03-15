import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { tasksReducer } from "./todo/task-reducer";
import thunk from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  combineReducers({
    tasks: tasksReducer,
  }),
  composeEnhancer(applyMiddleware(thunk))
);
