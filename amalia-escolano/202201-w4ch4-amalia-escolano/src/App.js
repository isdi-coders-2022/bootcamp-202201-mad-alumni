import './App.css';
import { useContext } from 'react';
import AccessData from './components/access-data';
import PersonalData from './components/personal-data';
import { context } from './context/context-provider';
import Confirmation from './components/confirmation';

function App() {
  const { stepForm } = useContext(context);

  return (
    <div className="App">
      {stepForm === 1 && <PersonalData />}
      {stepForm === 2 && <AccessData />}
      {stepForm === 3 && <Confirmation />}
    </div>
  );
}

export default App;
