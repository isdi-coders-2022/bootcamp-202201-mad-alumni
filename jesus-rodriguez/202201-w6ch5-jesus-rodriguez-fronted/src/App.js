import './App.css';
import { Routes, Route } from 'react-router-dom';
import { ContainerRobots } from './components/container-robots';
import { NewRobotForm } from './components/form-new-robots';
import { UpdateRobot } from './components/form-update-robot';

export function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ContainerRobots />} />
        <Route path="/newrobot" element={<NewRobotForm />} />
        <Route path="/update-robot/:id" element={<UpdateRobot />} />
        <Route path="*" element={<ContainerRobots />} />
      </Routes>
    </div>
  );
}

// export default App;
