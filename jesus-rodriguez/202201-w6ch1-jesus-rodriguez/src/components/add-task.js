import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../redux/todolist/action-creators";

export function AddTask() {
  const [task, setTask] = useState("");
  function addTodo() {
    console.log("Added");
  }

  return (
    <>
      <h2>Add Tarea</h2>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Nombre de la tarea"
          value={task}
          required
          onChange={(e) => setTask(e.target.value)}
        />

        <button type="submit" onClick={addTodo}>
          Add
        </button>
      </form>
    </>
  );
}
