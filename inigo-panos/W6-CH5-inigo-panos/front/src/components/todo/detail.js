import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Robot } from "../../models/robotState";
import { get } from "../../services/api";
import { Update } from "./update.js";
import { Link } from "react-router-dom";
import { removeRobots } from "../../redux/tasks/action-creators";
import { remove } from "../../services/api";

export function Detail() {
  const { id } = useParams();
  console.log(id);

  const [newRobot, setNewRobot] = useState(new Robot());

  useEffect(() => {
    get(id).then((resp) => {
      console.log(resp);
      setNewRobot(resp.data);
    });
  }, []);

  const dispatch = useDispatch();

  const deleteRobot = (id) => {
    remove(id).then((resp) => {
      dispatch(removeRobots(resp.data));
    });
  };

  function handleClick() {
    deleteRobot(newRobot._id);
  }

  return (
    <>
      <h2>Detalle de robot</h2>
      <Update />
      <ul className="task-list">
        <div>
          <p>Name: {newRobot.name}</p>
          <p>
            <img src={`${newRobot.image}`} alt="newRobot" />
          </p>
          <p>Speed: {newRobot.speed}</p>
          <p>Endurance: {newRobot.endurance}</p>
          <p>Date of creation: {newRobot.date}</p>
        </div>
      </ul>
      <Link to={`/`}>
        <button>Robot list</button>
      </Link>
      <div
        role="button"
        tabIndex={0}
        onClick={handleClick}
        onKeyPress={handleClick}
      >
        🗑️
      </div>
    </>
  );
}
