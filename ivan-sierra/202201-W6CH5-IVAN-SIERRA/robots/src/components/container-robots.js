import { ButtonAdd } from '../components/button-add';
import { RobotDetails } from '../components/robot-details';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAll } from '../services/apiRobot';
import * as action from '../redux/action-creator';
export function ContainerRobots() {
  const robots = useSelector((state) => state.robots);

  const dispatch = useDispatch();
  useEffect(() => {
    getAll().then((resp) => {
      console.log(resp.data);
      dispatch(action.load(resp.data));
    });
  }, []);

  // useEffect(() => {
  //   console.log(robots);
  // }, [robots]);

  return (
    <>
      <h1 className="title">Robots</h1>

      {robots.length ? (
        <>
          <div className="container-robots">
            {robots.map((robot) => (
              <RobotDetails robot={robot} key={robot._id} />
            ))}
          </div>
        </>
      ) : (
        <p>There are no robots</p>
      )}
      <div className="add-button-container">
        <ButtonAdd></ButtonAdd>
      </div>
    </>
  );
}
