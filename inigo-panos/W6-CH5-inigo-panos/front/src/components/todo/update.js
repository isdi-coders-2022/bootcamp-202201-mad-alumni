/* eslint-disable react/no-typos */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Robot } from "../../models/robotState";
import { get, update } from "../../services/api";
import { updateRobots } from "../../redux/tasks/action-creators";

export function Update() {
  const dispatch = useDispatch();

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    get(id).then((resp) => {
      console.log(resp);
      setNewRobot(resp.data);
    });
  }, []);

  const updateRobot = (robot) => {
    update(robot).then((resp) => {
      dispatch(updateRobots(newRobot));
    });
  };

  const [newRobot, setNewRobot] = useState(new Robot());

  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log("Updated existing robot ", newRobot);
    updateRobot(newRobot);
    setNewRobot(newRobot);
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
          placeholder="Name of the robot"
          value={newRobot.name}
          onChange={handleChange}
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
        <button type="submit">Update</button>
      </form>
    </>
  );
}
