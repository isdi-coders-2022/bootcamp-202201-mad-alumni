import { useDispatch } from "react-redux";
import { removeTask, updateTask } from "../redux/todo/action-creator";

export function Task({ task }) {
  const dispatch = useDispatch();

  const deleteTask = (task) => {
    dispatch(removeTask(task));
  };
  const toggleTask = (task) => {
    dispatch(updateTask(task));
  };

  function handleClick() {
    deleteTask(task);
  }

  function handleChange() {
    toggleTask({ ...task, isCompleted: !task.isCompleted });
  }

  return (
    <li>
      <input type="checkbox" checked={task.isCompleted} onChange={handleChange} />
      <span>{task.name}</span> -<span>{task.responsible}</span>
      <div role="button" onClick={handleClick} onKeyPress={handleClick}>
        🗑️
      </div>
    </li>
  );
}
