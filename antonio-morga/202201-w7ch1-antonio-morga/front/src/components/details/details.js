import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as action from '../../redux/robots/action-creators';
import * as api from '../../services/api';

export function Details() {
  const initialState = {
    robotName: '',
    speed: 0,
    strength: 0,
    creationDate: '',
    img: '',
  };
  const dispatch = useDispatch();
  const { id } = useParams();
  const [formState, setFormState] = useState(initialState);
  useEffect(() => {
    api.getOneRobot(id).then((response) => {
      setFormState(response.data);
    });
  }, [id]);
  const handleUpdate = (ev) => {
    ev.preventDefault();
    dispatch(action.updateRobot(formState));
  };
  const handleChange = (ev) => {
    setFormState({ ...formState, [ev.target.name]: ev.target.value });
  };

  return (
    <main className="details">
      <img className="details__image" src={formState.img} alt="" />
      <form className="details__form" onSubmit={handleUpdate}>
        <label htmlFor="name">Name</label>
        <input
          className="form__input"
          type="text"
          name="robotName"
          placeholder="Robot name"
          id="name"
          required
          value={formState.robotName}
          onChange={handleChange}
        />
        <label htmlFor="speed">Speed</label>
        <input
          type="range"
          name="speed"
          id="speed"
          value={formState.speed}
          min="0"
          max="10"
          step="1"
          onChange={handleChange}
        />
        <label htmlFor="strength">Strength</label>
        <input
          type="range"
          name="strength"
          id="strength"
          value={formState.strength}
          min="0"
          max="10"
          step="1"
          onChange={handleChange}
        />
        <label htmlFor="img">Image URL</label>
        <input
          className="form__input"
          type="text"
          name="img"
          id="img"
          placeholder="Picture url"
          value={formState.img}
          onChange={handleChange}
        />
        <label htmlFor="date">Date of creation</label>
        <input
          type="date"
          name="creationDate"
          id="date"
          value={formState.creationDate}
          onChange={handleChange}
        />
        <input type="submit" value="save changes" />
      </form>
    </main>
  );
}
