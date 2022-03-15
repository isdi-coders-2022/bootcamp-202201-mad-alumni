import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { UserForm } from './user-form.js';
import * as action from '../redux/control-users/action-creator';

export function UserButtons() {
  const currentUser = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [showLogin, setShowLogin] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false);

  const handleLogin = () => {
    if (currentUser.isLogged) {
      dispatch(action.logout());
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
        <button className="login-button" onClick={handleLogin}>
          {currentUser.isLogged ? 'Logout' : 'Login'}
        </button>
      )}
      {!showLogin && !currentUser.isLogged && (
        <button className="login-button" onClick={handleRegistration}>
          Registration
        </button>
      )}
      {showLogin && <UserForm setShowForm={setShowLogin} mode="login" />}
      {showRegistration && (
        <UserForm setShowForm={setShowRegistration} mode="registration" />
      )}
    </div>
  );
}
