import logo from './logo.svg';
import './App.css';
import { Keyboard } from './components/keyboard';
import { Display } from './components/display';
import { Actions } from './components/actions';
import { useState } from 'react';

function App() {
  const allNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [nums, setNums] = useState(allNum);

  return (
    <div classNameName="App">
      <div className="container">
        <Display></Display>
        <main className="phone">
          <Keyboard></Keyboard>
          <Actions></Actions>
        </main>
      </div>
    </div>
  );
}

export default App;
