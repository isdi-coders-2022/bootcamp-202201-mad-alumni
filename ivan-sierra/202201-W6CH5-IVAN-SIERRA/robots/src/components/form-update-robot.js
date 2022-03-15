import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as action from '../redux/action-creator';
import * as api from '../services/apiRobot';
export function UpdateRobot() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const modelRobot = {
    title: '',
    type: '',
    status: '',

  };
  const [updateRobot, setUpdateRobot] = useState(modelRobot);
  useEffect(() => {
    api.getRobot(id).then((resp) => {
      console.log(resp.data);
      setUpdateRobot(resp.data);
    });
  }, [id]);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    robotUpdate(updateRobot);
    setUpdateRobot(modelRobot);
  };
  const robotUpdate = (nRobot) => {
    api.updateRobot(nRobot).then((resp) => {
      dispatch(action.update(resp.data));
    });
  };

  const handleChange = (ev) => {
    setUpdateRobot({ ...updateRobot, [ev.target.name]: ev.target.value });
  };
  return (
    <>
      <h2>Update Robot</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre Robot
          <input
            value={updateRobot.title}
            name="name"
            type="text"
            onChange={handleChange}
          />
        </label>
        <label>
          Tipo Robot
          <input
            value={updateRobot.type}
            name="type"
            type="string"
            onChange={handleChange}
          />
        </label>

        <label>
          Estado Robot
          <input
            value={updateRobot.status}
            name="status"
            type="boolean"
            onChange={handleChange}
          />
        </label>

        <button type="submit">Update</button>
      </form>

      <Link to="/">
        <button type="button">Volver</button>
      </Link>
    </>
  );
}
