import { Add } from "./add";
import { Task } from "./task";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadTasks } from "../redux/todo/action-creator";

export function ToDoList() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTasks());
  }, [dispatch]);

  return (
    <>
      <Add />
      {tasks.length ? (
        <>
          <h3> Lista de tareas </h3>
          <ul>
            {tasks.map((task) => (
              <Task task={task} key={task.id} />
            ))}
          </ul>
        </>
      ) : (
        ""
      )}
    </>
  );
}
