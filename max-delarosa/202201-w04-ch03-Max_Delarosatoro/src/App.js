import { useState } from 'react';
import './App.css';
import Actions from './components/Actions';
import Info from './components/Info';
import Keyboard from './components/Keyboard';
import { keys } from './models/keys';

function App() {
    const [activeCall, setActiveCall] = useState(false);
    const [numberDisplay, setNumberDisplay] = useState([]);

    const addNumber = (key) => {
        if (numberDisplay.length < 9) {
            setNumberDisplay([...numberDisplay, key]);
        }
    };

    const deleteNumber = () => {
        const newArr = [...numberDisplay];
        newArr.pop();
        setNumberDisplay(newArr);
    };

    const startCall = () => {
        setActiveCall(true);
        setTimeout(() => {
            hangCall();
        }, 5000);
    };

    const hangCall = () => {
        setActiveCall(false);
    };

    return (
        <div className="App">
            <Info activeCall={activeCall} />
            <main className="phone">
                <Keyboard
                    deleteNumber={deleteNumber}
                    addNumber={addNumber}
                    keys={keys}
                    activeCall={activeCall}
                />
                <Actions
                    startCall={startCall}
                    hangCall={hangCall}
                    numberDisplay={numberDisplay}
                    activeCall={activeCall}
                />
            </main>
        </div>
    );
}

export default App;
