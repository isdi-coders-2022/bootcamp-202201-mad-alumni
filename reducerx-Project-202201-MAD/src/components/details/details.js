import { useState, useEffect } from 'react';
import * as api from '../../services/api';
import { FavoritesIcon } from '../favorites-icon/favorites-icon';
import './details-style.scss';

export function Details() {
    const [state, setState] = useState({});
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const cocktailId = urlParams.get('id');
    const detailsURL = `https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=${cocktailId}`;

    useEffect(() => {
        api.getDetails(detailsURL)
            .then((resp) => {
                setState(resp.data.drinks[0]);
            })
            .catch((error) => console.log(error));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const cocktailInfo = state;

    return (
        <div>
            {state ? (
                <div className="cocktail-detail">
                    <img
                        className="cocktail-detail__title__image"
                        src={state.strDrinkThumb}
                        alt="Cocktail glass"
                    />

                    <h4 className="cocktail-detail__title__name">
                        {state.strDrink}
                    </h4>
                    <div className="cocktail-detail__instructions">
                        <h3 className="cocktail-detail__instructions__title">
                            Instructions
                        </h3>

                        <p className="cocktail-detail__instructions__description">
                            {state.strInstructions}
                        </p>
                        <FavoritesIcon
                            cocktailId={state.idDrink}
                            cocktail={cocktailInfo}
                        />
                    </div>
                </div>
            ) : (
                <p>Loading</p>
            )}
        </div>
    );
}
