/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/context';
import './cocktail-list.scss';

export function CocktailList() {
    const { store } = useContext(Context);
    const [indexMarker, setIndexMarker] = useState(0);

    function handleOnClickNext() {
        setIndexMarker(indexMarker + 8);
    }

    function handleOnClickPrev() {
        setIndexMarker(indexMarker - 8);
    }

    return (
        <div>
            {store.cocktails ? (
                <main>
                    <ul className="cocktail-list">
                        {store.cocktails.map(
                            (item, index) =>
                                index >= indexMarker &&
                                index < indexMarker + 8 && (
                                    <li
                                        key={item.idDrink}
                                        className="cocktail-list__name"
                                    >
                                        <Link
                                            to={`/details?id=${item.idDrink}`}
                                        >
                                            <div>
                                                <img
                                                    src={item.strDrinkThumb}
                                                    alt="Cocktail"
                                                />

                                                <p className="cocktail-title__mobile">
                                                    {item.strDrink}
                                                </p>
                                            </div>
                                            <p className="cocktail-title__desktop">
                                                {item.strDrink}
                                            </p>
                                        </Link>
                                    </li>
                                )
                        )}
                    </ul>
                    <div className="cocktails-navigation">
                        {indexMarker > 7 && (
                            <button
                                className="cocktails-navigation__previous"
                                data-testid="btn-prev"
                                onClick={handleOnClickPrev}
                                value="prev"
                                type="button"
                            >
                                Previous
                            </button>
                        )}
                        {indexMarker < store.cocktails.length - 9 && (
                            <button
                                className="cocktails-navigation__next"
                                onClick={handleOnClickNext}
                                data-testid="btn-next"
                                value="next"
                                type="button"
                            >
                                Next
                            </button>
                        )}
                    </div>
                </main>
            ) : (
                <p>Loading</p>
            )}
        </div>
    );
}
