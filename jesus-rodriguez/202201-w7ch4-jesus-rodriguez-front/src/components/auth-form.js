import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import * as api from '../services/apiUsers';
import * as action from '../redux/control-users/action-creator';
export function LoginForm() {
  const modelUser = {
    name: '',
    passwd: '',
    token: '',
  };

  const [user, setUser] = useState(modelUser);
  const dispatch = useDispatch();

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    let result;
    result = await api.login(user);
    dispatch(action.login({ ...result.data, isLogged: true }));
    setUser(modelUser);
  };

  const handleChange = (ev) => {
    setUser({ ...user, [ev.target.name]: ev.target.value });
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Usuario
        <input
          value={user.name}
          name="name"
          type="text"
          onChange={handleChange}
        />
      </label>

      <label>
        Password
        <input
          value={user.passwd}
          name="passwd"
          type="password"
          onChange={handleChange}
        />
      </label>

      <button type="submit">Login</button>
    </form>
  );
}
