import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../redux/login.logout/action.creator.js";
import { UserForm } from "./user-form";

export function UserButtons() {
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const [showLogin, setShowLogin] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false);

  const handleLogin = () => {
    if (user.isLogged) {
      dispatch(actions.logout());
    } else {
      setShowLogin(true);
    }
  };

  const handleRegistration = () => {
    setShowRegistration(true);
  };
  return (
    <div>
      {!showLogin && (
        <button onClick={handleLogin}>
          {user.isLogged ? "Logout" : "Login"}
        </button>
      )}
      {!showLogin && !user.isLogged && (
        <button onClick={handleRegistration}>Registration</button>
      )}
      {showLogin && <UserForm setShowForm={setShowLogin} mode="login" />}
      {showRegistration && (
        <UserForm setShowForm={setShowRegistration} mode="registration" />
      )}
    </div>
  );
}
