import { useStore, useSelector, useDispatch } from "react-redux";
import * as actions from "../../redux/counter/action-creators";
import { addTodo } from "../../redux/counter/actions";

export function ToDo() {
  console.log(useStore());

  let input = "";

  const addTask = (e) => {
    e.preventDefault();
    dispatch(addTodo(input.value));
    console.log(input.value);
  };

  const dispatch = useDispatch();

  return (
    <>
      <div>
        <span>Task list</span>
        <span> {useStore().getState().counter}</span>
        <span> {addTask} </span>
        <div>
          <button
            onClick={() => {
              dispatch(actions.addTask());
            }}
          >
            Add task
          </button>
          <button
            onClick={() => {
              dispatch(actions.deleteTask());
            }}
          >
            Delete task
          </button>
          <button
            onClick={() => {
              dispatch(actions.resetTasks());
            }}
          >
            Reset list
          </button>
        </div>
      </div>
    </>
  );
}
