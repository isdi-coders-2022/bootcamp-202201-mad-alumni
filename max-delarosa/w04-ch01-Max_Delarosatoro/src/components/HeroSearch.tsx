import React, { useEffect, useState } from 'react';
import { heroes } from '../mock-heroes';

export default function HeroSearch({
    search,
    handleKeyPress,
    inputValue,
    setInputValue,
}: any) {
    interface heroeArray {
        id: number;
        name: string;
    }
    const [searchResults, setSearchResults] = useState<heroeArray[]>([]);
    useEffect(() => {
        setSearchResults(
            heroes.filter((hero) =>
                hero.name.toLowerCase().includes(search.toLowerCase())
            )
        );
    }, [search]);
    return (
        <section className="hero-search">
            <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                type="text"
            />
            {search !== '' &&
                searchResults.map((result) => <p>{result.name}</p>)}
        </section>
    );
}
