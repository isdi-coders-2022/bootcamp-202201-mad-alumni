import { useState, useEffect } from 'react';
import './App.css';
import { Actions } from './components/actions';
import { Info } from './components/info';
import { Keyboard } from './components/keyboard';
import { setNewNumber } from './services/set-number';

function App() {
  const [phoneNumber, setPhoneNumber] = useState([]);
  const [callStatus, setCallStatus] = useState(false);

  useEffect(() => {
    setPhoneNumber(setNewNumber());
  }, []);

  const updateNumber = (newDigit) => {
    if (phoneNumber.number.length >= 9) return;
    const updatedNumber = {
      ...phoneNumber,
      number: [...phoneNumber.number, newDigit],
    };
    setPhoneNumber(updatedNumber);
  };

  const deleteLastDigit = () => {
    const updatedNumber = { ...phoneNumber };
    updatedNumber.number.pop();
    setPhoneNumber(updatedNumber);
  };

  const updateCallStatus = () => {
    setCallStatus(!callStatus);
  };

  return (
    <div className="App">
      <div className="container">
        <Info active={callStatus} />
        <main className="phone">
          <Keyboard
            updateNumber={updateNumber}
            deleteLastDigit={deleteLastDigit}
          />
          <Actions
            updateCallStatus={updateCallStatus}
            callStatus={callStatus}
            phoneNumber={phoneNumber}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
