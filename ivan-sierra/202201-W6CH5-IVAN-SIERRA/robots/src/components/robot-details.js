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
/*
    function estado(robot){
        if (robot.status) {
            "<span>👍</span><br></br>"
        } else {
            "<span>👎</span><br></br>"
        }
    }
*/
  return (
    <>
      <div className="robot">

        <b><span className="robot__property">Nombre : </span></b>
        <span>{robot.title}</span><br></br>
        <b><span className="robot__property">Tipo : </span></b>
        <span>{robot.type}</span><br></br>
        <b><span onload="estado()" className="robot__property">Estado : </span></b>


        <span>{robot.status}</span><br></br>

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
            🛠
          </button>
        </Link>
      </div><br></br><br></br>
    </>
  );
}
