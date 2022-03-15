/* eslint-disable react-hooks/exhaustive-deps */
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/context';
import { FavoritesIcon } from '../favorites-icon/favorites-icon';
import './cocktail-list-fav.scss';

export function CocktailListFav() {
    const { store } = useContext(Context);

    return (
        <div className="favorites-wrapper">
            {store.favorites ? (
                <main className="favorites-wrapper__main">
                    <h3 className="favorites-title">My Cocktails</h3>
                    <ul className="cocktail-list-fav">
                        {store.favorites.map((item) => (
                            <li
                                key={item.idDrink}
                                className="cocktail-list-fav__name"
                            >
                                <FavoritesIcon cocktailId={item.idDrink} />
                                <Link to={`/details?id=${item.idDrink}`}>
                                    <img
                                        src={item.strDrinkThumb}
                                        alt="Cocktail"
                                    />
                                    <p>{item.strDrink}</p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </main>
            ) : (
                <p>Loading</p>
            )}
        </div>
    );
}
