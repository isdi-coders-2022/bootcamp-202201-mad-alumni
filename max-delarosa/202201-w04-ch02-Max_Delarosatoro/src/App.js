import { useState } from 'react';
import './App.css';
import Controls from './components/Controls';
import Header from './components/core/Header';
import { Gentlemen } from './components/Gentlemen';
import { gentlemen as gentlemenData } from './models/gentleman.mock';

function App() {
    // eslint-disable-next-line no-unused-vars
    const [gentlemen, setGentlemen] = useState(gentlemenData);

    const handleSelect = (gentleman) => {
        setGentlemen(
            gentlemen.map((item) =>
                item.id === gentleman.id
                    ? { ...gentleman, selected: !gentleman.selected }
                    : item
            )
        );
    };

    const handleDelete = (gentleman) => {
        setGentlemen(gentlemen.filter((item) => item.id !== gentleman.id));
    };

    const selectAll = () => {
        setGentlemen(
            gentlemen.map((item) => {
                return { ...item, selected: true };
            })
        );
    };

    return (
        <div className="App">
            <Header />
            <Controls selectAll={selectAll} gentlemen={gentlemen} />
            <main>
                <Gentlemen
                    handleDelete={handleDelete}
                    handleSelect={handleSelect}
                    gentlemen={gentlemen}
                />
            </main>
        </div>
    );
}

export default App;
