import './App.css';
import { Routes, Route } from 'react-router-dom';
// import { RegisterForm } from '../src/components/register-form';
import { ContainerMembers } from '../src/components/members-container';
import { useSelector } from 'react-redux';
import { UserButtons } from './components/user-buttom';
// import { ContainerRobots } from './components/container-robots';
// import { NewRobotForm } from './components/form-new-robots';
// import { UpdateRobot } from './components/form-update-robot';

export function App() {
  const user = useSelector((state) => state.user);
  return (
    <div className="App">
      <header className="App-header">
        {/* <Routes>
        <Route path="/" element={<RegisterForm />} /> 
         <Route path="/newrobot" element={<NewRobotForm />} />
        <Route path="/update-robot/:id" element={<UpdateRobot />} />
        <Route path="/" element={<ContainerMembers />} />
      </Routes> */}
        {user.isLogged && <ContainerMembers />}
        <div>
          <UserButtons />
        </div>
      </header>
    </div>
  );
}

// export default App;
