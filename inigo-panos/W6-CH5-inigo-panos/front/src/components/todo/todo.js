import "./todo.css";
import { Add } from "./add";
import { Robot } from "./robot";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAll } from "../../services/api";
import { loadRobots } from "../../redux/tasks/action-creators";
import { Link } from "react-router-dom";

export function ToDo() {
  const robots = useSelector((state) => state.robots);
  console.log({ robots });
  const dispatch = useDispatch();

  useEffect(() => {
    getAll().then((resp) => {
      console.log(resp);
      dispatch(loadRobots(resp.data));
    });
  }, [dispatch]);

  //{<Robot robot={robot} key={robot.id} />}

  return (
    <>
      <Add />
      {robots.length ? (
        <>
          <h2>Lista de robots</h2>
          <ul className="task-list">
            {robots.map((robot) => (
              <>
                <Link to={`/robot/${robot._id}`}>
                  <p key={robot._id}>{robot.name}</p>
                </Link>

                <img src={`${robot.image}`} alt="Robot" />
              </>
            ))}
          </ul>
        </>
      ) : (
        "No robots available"
      )}
    </>
  );
}
