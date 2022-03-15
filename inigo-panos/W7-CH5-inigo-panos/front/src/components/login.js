/* eslint-disable no-unused-vars */
import { loginUser, update, updateUser } from "../services/api";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as actions from "../redux/userLog/action-creators.js";
import { UserLogin } from "../models/loginUserState";
import { MainPage } from "./mainPage";

export function LogIn() {
  const [user, setUser] = useState({ userName: "", password: "" });
  const dispatch = useDispatch();

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    let result;
    console.log(user);

    result = await loginUser(user);
    console.log(result, " result");
    dispatch(
      actions.login({
        ...result.data,
        isLogged: true,
        userName: user.userName,
      })
    );
    console.log("Login succesful! ", user);
  };
  useEffect(() => {
    // console.log(user);
  }, [user]);

  const handleChange = (ev) => {
    setUser({ ...user, [ev.target.name]: ev.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="userName"
        placeholder="UserName"
        value={user.userName}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="password"
        placeholder="Password"
        value={user.password}
        onChange={handleChange}
        required
      />

      <button type="submit">Log In</button>
    </form>
  );
}
