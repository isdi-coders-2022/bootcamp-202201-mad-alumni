/* eslint-disable no-unused-vars */
import { registerUser, update, updateUser } from "../services/api";
import { useEffect, useState } from "react";
import { User } from "../models/userState";
import { useDispatch } from "react-redux";
import * as actions from "../redux/userLog/action-creators.js";

export function Register() {
  const [user, setNewUser] = useState(new User());
  const dispatch = useDispatch();

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    let result;
    console.log(user);
    // console.log("Hola caracola"); // Estes se llama
    result = await registerUser(user);
    // console.log(result, " result"); //Este no
    dispatch(actions.login({ ...result.data, isLogged: true }));
    // console.log("Registered new user ", user);
  };

  // useEffect(() => {
  //   console.log(user);
  // }, [user]);

  const handleChange = (ev) => {
    setNewUser({ ...user, [ev.target.name]: ev.target.value });
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
      <input
        type="text"
        name="profileImage"
        placeholder="Profile Image"
        value={user.profileImage}
        onChange={handleChange}
        required
      />

      <button type="submit">Register</button>
    </form>
  );
}
