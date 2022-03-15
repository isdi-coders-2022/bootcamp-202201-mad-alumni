import { createStore } from "redux";
import { tasksCounter } from "./counter/counter-reducer";

function test() {
  console.log(tasksCounter);
}

export const store = createStore(
  tasksCounter,
  window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION(),
  test()
);
