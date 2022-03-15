import { useState } from 'react';
import './App.css';
import { ActionHangCall } from './components/actions/ActionHangCall';
import { ActionNumber } from './components/actions/ActionNumber';
import { Display } from './components/Display';
import { Keyboard } from './components/Keyboard';

export function App() {
    const [state, setNewState] = useState([]);
    const [isCalling, setIsCalling] = useState(false);

    const addNumber = (newNumber) => {
        if (state.length < 9) {
            const newAddNum = [...state, newNumber];
            setNewState(newAddNum);
        }
    };
    const deleteNumber = () => {
        setNewState(state.filter((e, index) => index !== state.length - 1));
    };

    const calling = () => {
        setIsCalling(!isCalling);
    };

    return (
        <div className="container">
            <Display isCalling={isCalling} />
            <main className="phone">
                <Keyboard addNumber={addNumber} deleteNumber={deleteNumber} />
                <div className="actions">
                    <ActionNumber printNumber={state} />
                    <ActionHangCall calling={calling} isCalling={isCalling} />
                </div>
            </main>
        </div>
    );
}
