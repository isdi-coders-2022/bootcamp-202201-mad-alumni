import { useEffect, useState } from 'react';
import * as api from '../services/apiRobot.js';
export function LoginForm() {
  //   const modelUser = {
  //     name: '',
  //     passwd: '',
  //     token: '',
  //   };
  let currentUser = {};
  const [user, setUser] = useState({});

  const checkLogin = (user) => {
    api.getUser(user).then((resp) => setUser({ token: resp.data }));
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    checkLogin(currentUser);
    console.log(user);
  };

  const handleChange = (ev) => {
    currentUser = { ...currentUser, [ev.target.name]: ev.target.value };
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Usuario
        <input
          value={user.resistance}
          name="name"
          type="text"
          onChange={handleChange}
        />
      </label>

      <label>
        Password
        <input
          value={user.resistance}
          name="passwd"
          type="password"
          onChange={handleChange}
        />
      </label>

      <button type="submit">Login</button>
    </form>
  );
}
