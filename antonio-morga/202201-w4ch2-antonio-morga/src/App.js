import React, { useState } from 'react';
import './App.css';
import { Gentleman } from './components/gentleman';
import { Header } from './components/header';
import { GENTLEMEN } from './models/gentlemen.data';

function App() {
    const [gentlemen, setGentlemen] = useState(GENTLEMEN);

    const deleteGentleman = (gentleman) => {
        setGentlemen(gentlemen.filter((item) => gentleman.id !== item.id));
    };

    const updateGentleman = (newGentleman) => {
        setGentlemen(
            gentlemen.map((item) =>
                newGentleman.id === item.id ? newGentleman : item
            )
        );
    };

    return (
        <div className="App">
            <Header />
            <ul className="gentlemen">
                {gentlemen.map((gentleman, i) => {
                    return (
                        <Gentleman
                            key={i}
                            gentleman={gentleman}
                            deleteGentleman={deleteGentleman}
                            updateGentleman={updateGentleman}
                        />
                    );
                })}
            </ul>
        </div>
    );
}

export default App;
