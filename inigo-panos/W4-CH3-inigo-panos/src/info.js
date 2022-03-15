import './App.css';
import React, { useState } from 'react';
import { Keyboard } from './components/keyboard/keyboard';
import { Actions } from './components/action/actions';
import { Display } from './components/display';

function App() {
  const [state, setState] = useState([]);

  const updateState = (newState) => {
    setState(newState);
  };

  return (
    <div className="container">
      <Display />
      <main className="phone">
        <Keyboard
          stateKeyboardState={state}
          stateKeyboardFunction={updateState}
        />
        <Actions stateAction={state} />
      </main>
    </div>
  );
}

export default App;
