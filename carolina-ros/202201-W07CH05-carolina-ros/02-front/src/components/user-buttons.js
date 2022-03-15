import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../redux/login-logout/action-creator";
import { Login } from "./user-login.js";
import { Register } from "./user-registration.js";

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
      {showLogin && <Login setShowForm={setShowLogin} mode="login" />}
      {showRegistration && (
        <Register setShowForm={setShowRegistration} mode="registration" />
      )}
    </div>
  );
}
