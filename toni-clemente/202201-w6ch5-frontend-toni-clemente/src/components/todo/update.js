/* eslint-disable react/no-typos */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Robot } from "../../models/robot";
import { updateRobot } from "../../redux/robots/action-creators";
import { robotsReducer } from "../../redux/robots/robots-reducers";
import { update } from "../../services/api";

// export function Add() {
//   const dispatch = useDispatch();
//   const addRobot = (newRobot) => {
//     dispatch(createRobot(newRobot));
//   };

export function Update({ robot }) {
  const dispatch = useDispatch();

  const toggleRobot = (newRobot) => {
    update(newRobot).then((resp) => dispatch(updateRobot(newRobot)));
  };

  const [newRobot, setNewRobot] = useState({
    _id: robot._id,
    name: robot.name,
    speed: robot.speed,
    stamina: robot.stamina,
    image: robot.image,
    date: robot.date,
  });

  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log("Updated robot", newRobot);
    toggleRobot(newRobot);
    setNewRobot({
      _id: robot._id,
      name: robot.name,
      speed: robot.speed,
      stamina: robot.stamina,
      image: robot.image,
      date: robot.date,
    });
    console.log(setNewRobot);
  };

  const handleChange = (ev) => {
    setNewRobot({ ...newRobot, [ev.target.name]: ev.target.value });
  };

  return (
    <>
      <h2>Update Robot</h2>
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

        <button type="submit">Update</button>
      </form>
    </>
  );
}
