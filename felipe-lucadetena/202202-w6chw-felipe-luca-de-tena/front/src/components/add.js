import { useState } from "react";
import { useDispatch } from "react-redux";
import { createRobot } from "../redux/robots/action-creators";
import { setRobot } from "../services/robotsAPI";

export function Form() {
  const dispatch = useDispatch();
  const addRobot = (newRobot) => {
    setRobot(newRobot).then((resp) => {
      dispatch(createRobot(resp.data));
    });
  };

  const [newRobot, setNewRobot] = useState({
    Name: "",
    Speed: "",
    Defense: "",
    DateofCreation: "",
    Img: "",
  });

  let Robot = {};

  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log("Added robot", newRobot);
    addRobot(newRobot);
    setNewRobot(Robot);
  };
  const handleChange = (ev) => {
    setNewRobot({ ...newRobot, [ev.target.name]: ev.target.value });
  };
  return (
    <header className="header">
      <h1 className="header__h1">Robots Hall of Fame</h1>
      <h2 className="header__h2">Add a robot</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          onChange={handleChange}
          value={newRobot.Name}
          name="Name"
        />
        <input
          type="text"
          placeholder="Speed"
          onChange={handleChange}
          value={newRobot.Speed}
          name="Speed"
        />
        <input
          type="text"
          placeholder="Defense"
          onChange={handleChange}
          value={newRobot.Defense}
          name="Defense"
        />
        <input
          type="text"
          placeholder="Date of Creation"
          onChange={handleChange}
          value={newRobot.DateofCreation}
          name="DateofCreation"
        />
        <input
          type="text"
          placeholder="Image URL"
          onChange={handleChange}
          value={newRobot.Img}
          name="Img"
        />
        <button type="submit">Add</button>
      </form>
    </header>
  );
}
