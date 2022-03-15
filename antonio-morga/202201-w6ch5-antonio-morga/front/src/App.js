import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import * as action from './redux/robots/action-creators';
import { useEffect } from 'react';
import { Home } from './components/home/home';
import { Details } from './components/details/details';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(action.loadRobots());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Awesome Robots!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
