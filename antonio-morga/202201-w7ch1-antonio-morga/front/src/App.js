import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import * as userAction from './redux/user/action-creators';
import { useEffect } from 'react';
import { Home } from './components/home/home';
import { Details } from './components/details/details';
import { Login } from './components/login';

function App() {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(userAction.login());
  }, [dispatch, userState.authKey, userState.logged]);

  const handleLogout = () => {
    dispatch(userAction.logout());
  };

  console.log(userState);

  return (
    <div className="App">
      <Link to={`/`}>
        <h2>Awesome Robots!</h2>
      </Link>

      {userState.logged ? <button onClick={handleLogout}>Logout</button> : ''}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
