/* eslint-disable react/no-typos */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTask } from "../redux/todo/action-creator";
import { Task } from "../models/task";

export function Add() {
  const dispatch = useDispatch();
  const addTask = (newTask) => {
    dispatch(createTask(newTask));
  };
  const [newTask, setNewTask] = useState(new Task());

  const handleSubmit = (ev) => {
    ev.preventDefault();
    addTask(newTask);
    setNewTask(new Task());
  };

  const handleChange = (ev) => {
    setNewTask({ ...newTask, [ev.target.name]: ev.target.value });
  };

  return (
    <>
      <h3>Añade aqui la tarea</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Nombre de la tarea" value={newTask.name} onChange={handleChange} required />
        <input type="text" name="responsible" placeholder="Responsable" value={newTask.responsible} onChange={handleChange} />
        <button type="submit">Añadir</button>
      </form>
    </>
  );
}
