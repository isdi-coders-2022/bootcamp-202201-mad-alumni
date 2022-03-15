import { useState } from "react";
import { useDispatch } from "react-redux";
import { login, register } from "../services/api";
import * as actions from "../redux/login.logout/action.creator";

export function UserForm({ setShowForm, mode }) {
  const [user, setUser] = useState({ name: "", password: "" });
  const dispatch = useDispatch();

  const handleChange = (ev) => {
    setUser({ ...user, [ev.target.name]: ev.target.value });
  };
  const handleSubmit = async (ev) => {
    ev.preventDefault();

    try {
      let result;
      if (mode === "login") {
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
        <legend>{mode === "login" ? "Login" : "Registration"}</legend>
        <input
          type="text"
          name="name"
          placeholder="username"
          value={user.name}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={user.password}
          onChange={handleChange}
        />
      </fieldset>
      <button type="submit" onClick={handleSubmit}>
        {mode === "login" ? "Login" : "Registration"}
      </button>
      <button type="reset" onClick={handleCancel}>
        Cancel
      </button>
    </form>
  );
}
