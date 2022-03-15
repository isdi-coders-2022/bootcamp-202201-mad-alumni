import React, { useState } from 'react';
import './App.css';
import { Header } from './components/Core/Header';
import HeroSearch from './components/HeroSearch';
import TopHeroes from './components/TopHeroes';

function App() {
    const [search, setSearch] = useState<string>('');
    const [inputValue, setInputValue] = useState<string>('');

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setSearch(inputValue);
        }
    };

    return (
        <>
            <Header />
            <TopHeroes />
            <HeroSearch
                search={search}
                setSearch={setSearch}
                handleKeyPress={handleKeyPress}
                inputValue={inputValue}
                setInputValue={setInputValue}
            />
        </>
    );
}

export default App;
