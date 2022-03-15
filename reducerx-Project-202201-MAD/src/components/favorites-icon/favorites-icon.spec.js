import { screen, render } from '@testing-library/react';
import { FavoritesIcon } from './favorites-icon';
import { Context } from '../../context/context';

const state = {
    store: {
        favorites: [
            {
                id: '11007',
                idDrink: '11007',
                strDrink: 'Margarita',
            },
        ],
    },
};

const isFav = jest.fn().mockReturnValueOnce(true).mockReturnValueOnce(false);
const CheckIsFav = jest.fn();

describe('Favorites-icon componentis rendered', () => {
    render(
        <Context.Provider value={state}>
            <FavoritesIcon />
        </Context.Provider>
    );
    test('Favorites-icon renders', () => {
        const template = ` <div role="button" onClick={isFav}>
            {isFavorite ? '🗑' : '⭐️'}
        </div>`;

        expect(template).toBeDefined();

        const textElemtent = screen.getByText(/⭐️/i);
        expect(textElemtent).toBeInTheDocument();
    });

    test('Favorites-icon function is undefined and called n times', () => {
        const result = isFav(true);

        expect(result).toBeUndefined();
        expect(isFav).toHaveBeenCalledTimes(1);
        expect(isFav).toHaveBeenCalledWith(true);
    });

    test('Favorites-icon function isFav', () => {
        const resultFirst = isFav(true);
        const resultSecond = isFav(false);

        expect(resultFirst).toBeUndefined();
        expect(resultSecond).toBeUndefined();
        expect(isFav).toHaveBeenCalledTimes(2);
        expect(isFav).toHaveBeenNthCalledWith(1, true);
        expect(isFav).toHaveBeenNthCalledWith(2, false);
    });

    test('Favorites-icon function CheckIsFav', () => {
        const result = CheckIsFav(true);

        expect(result).toBeUndefined();
        expect(CheckIsFav).toHaveBeenCalledTimes(1);
        expect(CheckIsFav).toHaveBeenCalledWith(true);
    });
});
