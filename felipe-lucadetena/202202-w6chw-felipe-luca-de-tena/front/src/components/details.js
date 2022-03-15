import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import * as actions from "../redux/robots/action-creators";
import { updateRobot, getRobot } from "../services/robotsAPI";

export function Details() {
  const dispatch = useDispatch();

  const { id } = useParams();

  const [robot, setRobot] = useState({
    Name: "",
    Speed: "",
    Defense: "",
    DateofCreation: "",
    Img: "",
  });
  const [newRobot, setNewRobot] = useState({
    Name: "",
    Speed: "",
    Defense: "",
    DateofCreation: "",
    Img: "",
  });

  useEffect(() => {
    getRobot(id).then((resp) => {
      console.log(resp);
      setRobot(resp.data);
    });
  }, []);

  const toggleRobot = (newRobot) => {
    updateRobot(newRobot).then((resp) => {
      dispatch(actions.updateRobot(resp._id, newRobot));
    });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log("Updated robot", newRobot);
    toggleRobot(newRobot);
  };
  const handleChange = (ev) => {
    setNewRobot({ ...newRobot, [ev.target.name]: ev.target.value });
  };
  return (
    <>
      <h1 className="header__h1">Robot details</h1>
      <h2 className="header__h2">Update a robot</h2>

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
      <div className="robot__container">
        <figure key={robot.id} className="robot">
          <img className="robot__img" src={robot.Img} alt="none" />
          <figcaption className="robot__figc">{robot.Name}</figcaption>
        </figure>

        <p>{`Speed: ${robot.Speed}`}</p>
        <p>{`Defense: ${robot.Defense}`}</p>
        <p>{`Date of creation: ${robot.DateofCreation}`}</p>
      </div>
    </>
  );
}
