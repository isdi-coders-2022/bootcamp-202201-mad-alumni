import { render, screen } from '@testing-library/react';
import axios from 'axios';
import { Details } from './details';
import { FavoritesIcon } from '../favorites-icon/favorites-icon';

import { getDetails } from '../../services/api';

jest.mock('axios');

describe('Given getDetails is called', () => {
    beforeEach(() => {
        axios.get.mockResolvedValue({ data: 'Shaked not stirred' });
    });

    test('The api call returns the wanted data', async () => {
        expect(await getDetails(2)).toEqual({ data: 'Shaked not stirred' });
        expect(axios.getDetails).toHaveBeenLastCalledWith(
            'https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=2'
        );
    });

    describe('When calling the Details function', () => {
        test('And h3, image and star icon should be loaded', () => {
            render(<Details />);
            const imageAlt = screen.getByAltText('Cocktail glass');
            expect(imageAlt).toBeInTheDocument();

            const textElemtent = screen.getByText(/Instructions/i);
            expect(textElemtent).toBeInTheDocument();
        });
    });
    describe('Favorites-icon is rendered', () => {
        test('Favorites-icon renders', () => {
            render(<Details />);
            const template = <FavoritesIcon />;
            expect(template).toBeDefined();

            const textElemtent = screen.getByText(/⭐️/i);
            expect(textElemtent).toBeInTheDocument();
        });
    });

    describe('When waiting for the api call', () => {
        test('Loading is rendered on screen if the call does not arrive', () => {
            render(<Details />);
            const loading = screen.getByText(/Loading/i);
            expect(loading).toBeInTheDocument();
        });
    });
});
