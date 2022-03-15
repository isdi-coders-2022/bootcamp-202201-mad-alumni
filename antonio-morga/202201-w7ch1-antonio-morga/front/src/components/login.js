/* eslint-disable no-restricted-globals */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as userActions from '../redux/user/action-creators';

export function Login() {
  const url = `http://localhost:4500/login`;
  let token = '';
  const dispatch = useDispatch();
  const [loginState, setLoginState] = useState({
    name: '',
    password: '',
  });
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    dispatch(
      userActions.login({
        ...loginState,
      })
    );
  };

  const handleLogout = () => {
    dispatch(userActions.logout());
  };

  const handleChange = (ev) => {
    setLoginState({ ...loginState, [ev.target.name]: ev.target.value });
  };

  const handleGet = async () => {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        authorization: `bearer ${token.token}`,
      },
    });
    const data = await response.json();
    setLoginState({ ...loginState, showData: true });
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="user name"
          name="name"
          value={loginState.name}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={loginState.password}
          onChange={handleChange}
        />
        <input type="submit" value="login" />
      </form>
      {loginState.name ? <p>Hello, {loginState.name}</p> : <p>Login first</p>}

      <button onClick={handleGet}>Get</button>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}
