/* eslint-disable react/no-typos */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Robot } from "../../models/robot";
import { createRobot } from "../../redux/robots/action-creators";
import { set } from "../../services/api";

// export function Add() {
//   const dispatch = useDispatch();
//   const addRobot = (newRobot) => {
//     dispatch(createRobot(newRobot));
//   };

export function Add() {
  const dispatch = useDispatch();
  const addRobot = (newRobot) => {
    set(newRobot).then((resp) => dispatch(createRobot(resp.data)));
  };

  const [newRobot, setNewRobot] = useState(new Robot());

  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log("Added robot", newRobot);
    addRobot(newRobot);
    setNewRobot(new Robot());
  };

  const handleChange = (ev) => {
    /* switch (ev.target.name) {
            case 'name':
                setNewTask({ ...newTask, name: ev.target.value });
                break;
            case 'responsible':
                setNewTask({ ...newTask, responsible: ev.target.value });
                break;
            default:
        } */
    setNewRobot({ ...newRobot, [ev.target.name]: ev.target.value });
    // setNewTask(newTask[ev.target.name] = ev.target.value);
  };

  return (
    <>
      <h2>Add Robot</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre del robot"
          value={newRobot.name}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="speed"
          placeholder="speed from 1 to 10"
          value={newRobot.speed}
          onChange={handleChange}
        />
        <input
          type="number"
          name="stamina"
          placeholder="stamina from 1 to 10"
          value={newRobot.stamina}
          onChange={handleChange}
        />
        <input
          type="number"
          name="date"
          placeholder="date of creation"
          value={newRobot.date}
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="insert url with the robot image"
          value={newRobot.image}
          onChange={handleChange}
        />

        <button type="submit">Add</button>
      </form>
    </>
  );
}
