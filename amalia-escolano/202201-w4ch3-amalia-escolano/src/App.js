import { useState, useEffect } from 'react';
import './App.css';
import { Action } from './components/action';
import { Display } from './components/display';
import { Keyboard } from './components/keyboard';

function App() {
  const [callNumber, setCallNumber] = useState('');
  const [placeCall, setPlaceCall] = useState(false);

  useEffect(() => {
    setCallNumber(callNumber);
  }, [callNumber]);

  useEffect(() => {
    setPlaceCall(placeCall);
  }, [placeCall]);

  const updateCallNumber = (newCallNumber) => {
    setCallNumber(newCallNumber);
  };

  const updatePlaceCall = (newPlaceCall) => {
    setPlaceCall(newPlaceCall);
  };

  return (
    <div className="container">
      <Display placeCall={placeCall} />
      <main className="phone">
        <div className="keyboard-container">
          <ol className="keyboard">
            <Keyboard
              callNumber={callNumber}
              updateCallNumber={updateCallNumber}
              placeCall={placeCall}
            />
          </ol>
        </div>
        <Action
          callNumber={callNumber}
          placeCall={placeCall}
          updatePlaceCall={updatePlaceCall}
          updateCallNumber={updateCallNumber}
        />
      </main>
    </div>
  );
}

export default App;
