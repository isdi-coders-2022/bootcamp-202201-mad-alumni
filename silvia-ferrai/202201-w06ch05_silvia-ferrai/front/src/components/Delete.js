import { useDispatch } from "react-redux";
import { deleteRobot } from "../redux/action.creators";
import { Update } from "./Update";

export function Delete({ robot }) {
  const dispatch = useDispatch();

  const removeRobot = (robot) => {
    dispatch(deleteRobot(robot._id));
  };

  function handleClick() {
    removeRobot(robot);
  }

  return (
    <li>
      {/* <input onChange={toggleRobot} /> */}
      <h3>{robot.name}</h3>
      <img src={`${robot.image}`} alt="ositos"></img>
      <p>⚡:{robot.speed}</p>
      <p>💪:{robot.strength}</p>
      <p>🎉:{robot.creation}</p>
      <div role="button" onClick={handleClick}>
        🗑
      </div>
      <Update />
    </li>
  );
}
