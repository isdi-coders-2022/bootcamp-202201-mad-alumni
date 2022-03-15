import "./todo.css";
import { Add } from "./add";
import { Robot } from "./robot";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadRobots } from "../../redux/robots/action-creators";
import { ROBOTS } from "../../models/robots.data";
import { getAll } from "../../services/api";

export function ToDo() {
  const robots = useSelector((state) => state.robots);
  console.log({ robots });
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const URL = "http://3600/robots";
  //   dispatch(loadRobots(ROBOTS));
  // }, []);

  useEffect(() => {
    getAll().then((resp) => {
      console.log(resp);
      dispatch(loadRobots(resp.data));
    });
  }, [dispatch]);

  return (
    <>
      <Add />
      {robots.length ? (
        <>
          <h2>Lista de robots</h2>
          <ul className="robot-list">
            {robots.map((robot) => (
              <Robot robot={robot} key={robot.id} />
            ))}
          </ul>
        </>
      ) : (
        ""
      )}
    </>
  );
}
