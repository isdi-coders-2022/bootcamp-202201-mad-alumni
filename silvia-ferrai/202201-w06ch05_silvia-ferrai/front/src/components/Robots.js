import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadRobots } from "../redux/action.creators";
import { AddRobot } from "./AddRobot";
import { Delete } from "./Delete";

export function Robots() {
  const robot = useSelector((state) => state.robot);
  console.log({ robot });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRobots());
  }, [dispatch]);

  return (
    <>
      <AddRobot />
      {robot ? (
        <>
          <h2>Lista de Robot Bears</h2>
          <ul className="robot-list">
            {robot.map((robot) => (
              <Delete key={robot.id} robot={robot} />
            ))}
          </ul>
        </>
      ) : (
        "Loading"
      )}
    </>
  );
}
