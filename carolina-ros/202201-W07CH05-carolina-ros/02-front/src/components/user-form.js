import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser, registerUser } from "../services/user";
import * as actions from "../redux/login-logout/action-creator";

export function LoginLogout({ setShowForm, mode }) {
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
        result = await loginUser(user);
      } else {
        result = await registerUser(user);
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
        <legend>{mode === "Login" ? "Login" : "Registration"}</legend>
        <input
          type="text"
          name="name"
          placeholder="User name"
          value={user.name}
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
        {mode === "Login" ? "Login" : "Registration"}
      </button>
      <button type="reset" onClick={handleCancel}>
        Cancel
      </button>
    </form>
  );
}
