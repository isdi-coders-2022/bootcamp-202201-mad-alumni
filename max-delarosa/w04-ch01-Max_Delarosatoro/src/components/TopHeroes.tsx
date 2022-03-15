import React, { useEffect, useState } from 'react';
import { heroes } from '../mock-heroes';

export default function TopHeroes() {
    interface topHeroesI {
        id: number;
        name: string;
    }
    const [topHeroes, setTopHeroes] = useState<topHeroesI[]>([]);

    const generateFourRandomNumbers = () => {
        const numberArray: number[] = [];
        for (let i = 0; i < 4; i += 1) {
            let randomNumber = null;
            while (randomNumber === null) {
                const tryNumber = Number(
                    (Math.random() * heroes.length).toFixed()
                );
                randomNumber = numberArray.includes(tryNumber)
                    ? null
                    : tryNumber;
            }
            numberArray.push(randomNumber);
        }
        return numberArray;
    };

    useEffect(() => {
        const indexArray = generateFourRandomNumbers();
        const topHeroArray = indexArray.map((index) => heroes[index]);
        setTopHeroes(topHeroArray);
    }, []);

    return (
        <section className="top-heroes">
            <h2 className="top-heroes__title">Top Heroes</h2>
            <div className="top-heroes__container">
                {topHeroes.map((hero) => (
                    <button
                        key={hero.id}
                        type="button"
                        className="top-heroes__button"
                    >
                        {hero.name}
                    </button>
                ))}
            </div>
        </section>
    );
}
