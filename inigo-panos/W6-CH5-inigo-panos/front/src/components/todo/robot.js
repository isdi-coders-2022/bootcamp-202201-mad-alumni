import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { removeRobots } from "../../redux/tasks/action-creators";
import { remove } from "../../services/api";
import { Link, useParams } from "react-router-dom";
import { Robot } from "../../models/robotState";
import { get } from "../../services/api";

export function RobotDetails({ robot }) {
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
    deleteRobot(robot._id);
    console.log(robot._id + " robot id");
  }

  return (
    <div>
      <div
        role="button"
        tabIndex={0}
        onClick={handleClick}
        onKeyPress={handleClick}
      >
        🗑️
      </div>
    </div>
  );
}
