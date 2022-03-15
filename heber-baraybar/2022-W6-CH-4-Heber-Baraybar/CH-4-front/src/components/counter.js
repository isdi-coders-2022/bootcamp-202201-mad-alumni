import { useStore, useSelector, useDispatch } from "react-redux";
import * as actions from "../redux/counter/action-creator";

export function Counter() {
  console.log(useStore());
  const counterState = useSelector((state) => {
    return state.counter;
  });
  const dispatch = useDispatch();
  return (
    <div>
      <span>Counter</span>
      <span>{counterState}</span>
      <div>
        <button
          onClick={() => {
            dispatch(actions.incrementCounter());
          }}
        >
          +
        </button>

        <button
          onClick={() => {
            dispatch(actions.decrementCounter());
          }}
        >
          -
        </button>

        <button
          onClick={() => {
            dispatch(actions.resetCounter());
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
