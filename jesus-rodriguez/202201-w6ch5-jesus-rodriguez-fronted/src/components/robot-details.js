import * as action from '../redux/action-creator';
import * as api from '../services/apiRobot';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
export function RobotDetails({ robot }) {
  const dispatch = useDispatch();

  function handleClick(robot) {
    api.removeRobot(robot._id).then((resp) => {
      if (resp.statusText.toLowerCase() === 'ok') {
        dispatch(action.remove(robot));
      }
    });
  }

  // const deleteRobot = (robot) => {
  //   api.removeRobot(robot._id).then((resp) => {
  //     if (resp.statusText.toLowerCase() === 'ok') {
  //       dispatch(action.remove(robot));
  //     }
  //   });
  // };
  return (
    <>
      <div className="robot">
        <img className="robot__image" src={`${robot.image}`} alt="" />
        <span className="robot__property">Nombre</span>{' '}
        <span>{robot.name}</span>
        <span className="robot__property">Resistance</span>{' '}
        <span>{robot.resistance}</span>
        <span className="robot__property">Velocidad</span>{' '}
        <span>{robot.speed}</span>
        <span className="robot__property">Fecha creacion</span>
        <span>{robot.creation_date}</span>
        <button
          className="button"
          onClick={() => {
            handleClick(robot);
          }}
          data-testid="custom-element"
          type="button"
        >
          🗑
        </button>
        <Link to={`/update-robot/${robot._id}`}>
          <button className="button" type="button">
            ✏
          </button>
        </Link>
      </div>
    </>
  );
}
