import { useState } from 'react';
import * as action from '../../redux/robots/action-creators';
import { useDispatch } from 'react-redux';

export function Form() {
  const initialState = {
    robotName: '',
    speed: 0,
    strength: 0,
    creationDate: '',
    img: '',
  };
  const [formState, setFormState] = useState(initialState);

  const dispatch = useDispatch();

  const handleChange = (ev) => {
    setFormState({ ...formState, [ev.target.name]: ev.target.value });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    dispatch(action.addRobot(formState));
    setFormState(initialState);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="form__input"
        type="text"
        name="robotName"
        placeholder="Robot name"
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
      <input
        className="form__input"
        type="text"
        name="img"
        placeholder="Picture url"
        value={formState.img}
        onChange={handleChange}
      />
      <input
        type="date"
        name="creationDate"
        id=""
        value={formState.creationDate}
        onChange={handleChange}
      />
      <input type="submit" value="create robot" />
    </form>
  );
}
