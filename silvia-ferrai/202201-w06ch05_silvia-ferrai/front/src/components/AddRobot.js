import { useState } from "react";
import { useDispatch } from "react-redux";
import { createRobot } from "../redux/action.creators";

export function AddRobot() {
  const dispatch = useDispatch();

  const [newRobot, setNewRobot] = useState({
    name: "",
    image: "",
    speed: 0,
    strength: 0,
    creation: "",
  });
  const addRobot = (newRobot) => {
    dispatch(createRobot(newRobot));
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log("added robot", newRobot);
    addRobot(newRobot);
    setNewRobot({ name: "", image: "", speed: 0, strength: 0, creation: "" });
  };

  const handleChange = (ev) => {
    setNewRobot({ ...newRobot, [ev.target.name]: ev.target.value });
  };
  return (
    <>
      <h2> Add Robot Care Bears</h2>
      <form onSubmit={handleSubmit}>
        <span> Name: </span>
        <input
          type="text"
          name="name"
          value={newRobot.name}
          onChange={handleChange}
        />
        <span> Image: </span>
        <input
          type="text"
          name="image"
          value={newRobot.image}
          onChange={handleChange}
        />
        <span> Speed: </span>
        <input
          type="number"
          name="speed"
          placeholder="0-10"
          value={newRobot.speed}
          onChange={handleChange}
        />
        <span> Strength: </span>
        <input
          type="number"
          name="strength"
          placeholder="0-10"
          value={newRobot.strength}
          onChange={handleChange}
        />
        <span> Creation date: </span>
        <input
          type="text"
          name="creation"
          placeholder="00-00-0000"
          value={newRobot.creation}
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
}
