export function Task({ task }) {
  function handleClick() {
    console.log("Hola");
  }

  function handleChange() {
    console.log("Hola");
  }

  return (
    <li>
      <input
        type="checkbox"
        checked={task.isCompleted}
        onChange={handleChange}
      />
      <span className={task.isCompleted ? "task-completed" : ""}>
        {task.name}
      </span>{" "}
      -<span>{task.responsible}</span>
      <div
        role="button"
        tabIndex={0}
        onClick={handleClick}
        onKeyPress={handleClick}
      >
        🗑️
      </div>
    </li>
  );
}
