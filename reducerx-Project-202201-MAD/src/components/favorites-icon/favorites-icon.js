import { useContext, useState, useEffect } from 'react';
import { Context } from '../../context/context';

export function FavoritesIcon({ cocktailId, cocktail }) {
    const { store, deleteCocktail, addCocktail } = useContext(Context);
    const [isFavorite, setIsFavorite] = useState(false);

    const CheckIsFav = () => {
        console.log('checkisfav');
        let checkFav;
        if (
            window.location.pathname.includes('/details') ||
            window.location.pathname.includes('/favorites')
        ) {
            checkFav = store.favorites.find((item) =>
                item ? item.id === cocktailId : false
            );
            if (checkFav) {
                checkFav = true;
            } else {
                checkFav = false;
            }
        }
        setIsFavorite(checkFav);
    };

    function isFav() {
        const data = store.favorites.find((element) =>
            element ? element.id === cocktailId : false
        );
        if (data) {
            deleteCocktail(cocktailId);
        } else {
            const newCocktailInfo = { ...cocktail, id: cocktail.idDrink };
            addCocktail(newCocktailInfo);
        }
    }

    useEffect(() => {
        CheckIsFav();
    });

    return (
        // eslint-disable-next-line jsx-a11y/interactive-supports-focus
        <div role="button" onKeyPress={isFav} onClick={isFav}>
            {isFavorite ? '🗑' : '⭐️'}
        </div>
    );
}
