import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../redux/robots/action-creators";
import { deleteRobot, getRobots } from "../services/robotsAPI";
import { Form } from "./add.js";

export function RobotList() {
  const dispatch = useDispatch();
  const robotState = useSelector((state) => {
    return state.robots;
  });
  useEffect(() => {
    getRobots().then((resp) => {
      console.log(resp);
      dispatch(actions.loadRobots(resp.data));
    });
  }, []);

  useEffect(() => {
    console.log(robotState.robots);
  }, [robotState]);

  function handleDelete(id) {
    console.log(id);
    deleteRobot(id).then((resp) => {
      dispatch(actions.removeRobot(resp.data));
      console.log(resp);
    });
  }

  return (
    <div>
      <Form />
      {robotState.robots ? (
        <main className="main">
          {robotState.robots.map((item) => (
            <div className="robot__container">
              <Link to={`/details/${item._id}`}>
                <figure key={item.id} className="robot">
                  <img className="robot__img" src={item.Img} alt="none" />
                  <figcaption className="robot__figc">{item.Name}</figcaption>
                </figure>

                <p>{`Speed: ${item.Speed}`}</p>
                <p>{`Defense: ${item.Defense}`}</p>
                <p>{`Date of creation: ${item.DateofCreation}`}</p>
              </Link>
              <button
                key={item.name}
                value={item._id}
                onClick={(ev) => handleDelete(ev.target.value)}
              >
                Delete
              </button>
            </div>
          ))}
        </main>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
}
