import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as action from '../redux/action-creator';
import * as api from '../services/apiRobot';
export function NewRobotForm() {
  const modelRobot = {
    name: '',
    speed: '',
    resistance: '',
    creation_date: '',
    image: '',
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
          Name Robot
          <input
            value={newRobot.name}
            name="name"
            type="text"
            onChange={handleChange}
          />
        </label>
        <label>
          Speed Robot
          <input
            value={newRobot.speed}
            name="speed"
            type="number"
            onChange={handleChange}
          />
        </label>

        <label>
          Resistencia
          <input
            value={newRobot.resistance}
            name="resistance"
            type="number"
            onChange={handleChange}
          />
        </label>
        <label>
          Image
          <input
            value={newRobot.image}
            name="image"
            type="text"
            onChange={handleChange}
          />
        </label>
        <label>
          Fecha Creacion
          <input
            value={newRobot.creation_date}
            name="creation_date"
            type="date"
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
