/* eslint-disable react/no-typos */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Robot } from "../../models/robotState";
import { createRobots } from "../../redux/tasks/action-creators";
import { set } from "../../services/api";

export function Add() {
  const dispatch = useDispatch();

  const createRobot = (robot) => {
    set(robot).then((resp) => {
      dispatch(createRobots(resp.data));
    });
  };
  const [newRobot, setNewRobot] = useState(new Robot());

  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log("Added new robot ", newRobot);
    createRobot(newRobot);
    setNewRobot(newRobot);
  };

  const handleChange = (ev) => {
    setNewRobot({ ...newRobot, [ev.target.name]: ev.target.value });
  };

  return (
    <>
      <h2>Add Robot</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name of the robot"
          value={newRobot.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="image"
          placeholder="URL image"
          value={newRobot.image}
          onChange={handleChange}
        />
        <input
          type="number"
          name="speed"
          placeholder="Speed of the robot"
          value={newRobot.speed}
          onChange={handleChange}
        />
        <input
          type="number"
          name="endurance"
          placeholder="Endurance of the robot"
          value={newRobot.endurance}
          onChange={handleChange}
        />
        <input
          type="text"
          name="date"
          placeholder="Date of the robot"
          value={newRobot.date}
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
}
