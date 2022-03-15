import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as api from '../services/apiUsers';
import * as action from '../redux/control-users/action-creator';

export function UserForm({ setShowForm, mode }) {
  const [user, setUser] = useState({ name: '', passwd: '' });
  const dispatch = useDispatch();

  const handleChange = (ev) => {
    setUser({ ...user, [ev.target.name]: ev.target.value });
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    try {
      let result;
      if (mode === 'login') {
        result = await api.login(user);
      } else {
        result = await api.register(user);
      }
      dispatch(action.login({ ...result.data, isLogged: true }));
      setShowForm(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = () => {
    setShowForm(false);
  };

  return (
    <form>
      <fieldset>
        <legend>{mode === 'login' ? 'Login' : 'Registration'}</legend>
        <input
          type="text"
          name="name"
          placeholder="user name"
          value={user.name}
          onChange={handleChange}
        />
        <input
          type="password"
          name="passwd"
          placeholder="password"
          value={user.passwd}
          onChange={handleChange}
        ></input>
        {/* {mode === 'registration' && (
          <input
            value={user.image}
            name="image"
            type="file"
            id="myFile"
            onChange={handleChange}
          ></input>
        )} */}
      </fieldset>
      <button className="login-button" type="submit" onClick={handleSubmit}>
        {mode === 'login' ? 'Login' : 'Registration'}
      </button>
      <button className="login-button" type="reset" onClick={handleCancel}>
        Cancel
      </button>
    </form>
  );
}
