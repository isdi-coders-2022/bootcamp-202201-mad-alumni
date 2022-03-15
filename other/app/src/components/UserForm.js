import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { login, register } from "../services/user.js";
import * as actions from "../redux/user/action-creators.js";

export function UserForm({ setShowForm, mode }) {
  const [user, setUser] = useState({ userName: "", password: "" });
  const dispatch = useDispatch();

  const handleChange = (ev) => {
    setUser({ ...user, [ev.target.name]: ev.target.value });
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    try {
      let result;
      if (mode.toLowerCase() === "login") {
        result = await login(user);
      } else {
        result = await register(user);
      }
      dispatch(actions.login({ ...result.data, isLogged: true }));
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
        <legend>
          {mode.toLowerCase() === "login" ? "Login" : "Registration"}
        </legend>
        <input
          type="text"
          name="userName"
          placeholder="username"
          value={user.userName}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={user.password}
          onChange={handleChange}
        ></input>
      </fieldset>
      <button type="submit" onClick={handleSubmit}>
        {mode.toLowerCase() === "login" ? "Login" : "Registration"}
      </button>
      <button type="reset" onClick={handleCancel}>
        Cancel
      </button>
    </form>
  );
}
