import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateRobot } from "../redux/action.creators";

export function Update({ robot }) {
  const dispatch = useDispatch();

  const [change, setChange] = useState({
    name: "",
    image: "",
    speed: 0,
    strength: 0,
    creation: "",
  });

  const changeRobot = (robot) => {
    dispatch(updateRobot(change._id, robot));
  };
  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log("changed robot", change);
    changeRobot(change);
    setChange({ name: "", image: "", speed: 0, strength: 0, creation: "" });
  };

  const handleChange = (ev) => {
    setChange({ ...robot, [ev.target.name]: ev.target.value });
  };

  return (
    <>
      <h4> Change Robot Care Bears</h4>
      <form onSubmit={handleSubmit}>
        <span> Name: </span>
        <input
          type="text"
          name="name"
          value={change.name}
          onChange={handleChange}
        />
        <span> Image: </span>
        <input
          type="text"
          name="image"
          value={change.image}
          onChange={handleChange}
        />
        <span> Speed: </span>
        <input
          type="number"
          name="speed"
          placeholder="0-10"
          value={change.speed}
          onChange={handleChange}
        />
        <span> Strength: </span>
        <input
          type="number"
          name="strength"
          placeholder="0-10"
          value={change.strength}
          onChange={handleChange}
        />
        <span> Creation date: </span>
        <input
          type="text"
          name="creation"
          placeholder="00-00-0000"
          value={change.creation}
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
}
