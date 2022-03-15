import { AddTask } from "./add-task";
import { Task } from "./task";

export function TodoList() {
  return (
    <>
      <AddTask />
      {tasks.length ? <h2>Lista de tareas</h2> : ""}
      <ul className="task-list">
        {tasks.map((task) => (
          <Task task={task} key={task.id} />
        ))}
      </ul>
    </>
  );
}
