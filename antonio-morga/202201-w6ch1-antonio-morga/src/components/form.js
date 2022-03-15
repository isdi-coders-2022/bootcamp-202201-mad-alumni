import { useState } from 'react';
import * as api from '../services/api';
import * as action from '../redux/todo/action-creators';
import { useDispatch } from 'react-redux';

export function Form() {
  const [formState, setFormState] = useState({
    title: '',
    isComplete: false,
  });

  const dispatch = useDispatch();

  const handleChange = (ev) => {
    setFormState({ ...formState, title: ev.target.value });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    dispatch(action.addTask(formState));
    setFormState({ title: '', isComplete: false });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="form__input"
        type="text"
        name="title"
        placeholder="new task"
        required
        value={formState.title}
        onChange={handleChange}
      />
      <input type="submit" value="create task" />
    </form>
  );
}
