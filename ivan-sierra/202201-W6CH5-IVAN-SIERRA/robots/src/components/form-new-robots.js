import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as action from '../redux/action-creator';
import * as api from '../services/apiRobot';
export function NewRobotForm() {
  const modelRobot = {
    title: '',
    type: '',
    status: '',
  };
  const dispatch = useDispatch();
  const [newRobot, setNewRobot] = useState(modelRobot);
  const handleSubmit = (ev) => {
    ev.preventDefault();
    addRobot(newRobot);
    setNewRobot(modelRobot);
  };
  const addRobot = (nRobot) => {
    api.newRobot(nRobot).then((resp) => dispatch(action.create(resp.data)));
  };

  const handleChange = (ev) => {
    setNewRobot({ ...newRobot, [ev.target.name]: ev.target.value });
  };
  return (
    <>
      <h2>New Robot</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre Robot
          <input
            value={newRobot.title}
            name="title"
            type="string"
            onChange={handleChange}
          />
        </label>
        <label>
          Tipo Robot
          <input
            value={newRobot.type}
            name="type"
            type="string"
            onChange={handleChange}
          />
        </label>

        <label>
          Estado
          <input
            value={newRobot.status}
            name="status"
            type="boolean"
            onChange={handleChange}
          />
        </label>
        

        <button type="submit">Crear</button>
      </form>

      <Link to="/">
        <button type="button">Volver</button>
      </Link>
    </>
  );
}
