import './App.css';
import { useState } from 'react';
import { Display } from './components/display';
import { Action } from './components/actions/action';
import { Keyboard } from './components/keyboard/key';
import { CallHang } from './components/actions/callhang';

export function App() {
    const [displayNumber, setDisplayNumber] = useState('');
    const [isCalling, setIsCalling] = useState(false);

    const updateNumber = (newNumber) => {
        if (displayNumber.length < 9 && !isCalling) {
            const addNumber = displayNumber + newNumber;
            setDisplayNumber(addNumber);
        }
    };
    const deleteNumber = () => {
        if (!isCalling) {
            setDisplayNumber(
                displayNumber.substring(0, displayNumber.length - 1)
            );
        }
    };
    const toggleIsCalling = () => {
        setIsCalling(!isCalling);
    };

    return (
        <div className="container">
            <Display isCalling={isCalling} />

            <main className="phone">
                <Keyboard
                    updateNumber={updateNumber}
                    deleteNumber={deleteNumber}
                />
                <div className="actions">
                    <Action displayNumber={displayNumber} />
                    <CallHang
                        toggleIsCalling={toggleIsCalling}
                        isCalling={isCalling}
                    />
                </div>
            </main>
        </div>
    );
}
