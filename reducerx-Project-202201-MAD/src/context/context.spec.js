import axios from 'axios';
import { getAll } from '../services/api';

jest.mock('axios');

describe('Given an api call function, useEffect', () => {
    describe('When it calls getAll function', () => {
        beforeEach(() => {
            axios.get.mockResolvedValue({ data: 'False result!' });
        });

        test('Api call returns elements', async () => {
            expect(await getAll()).toStrictEqual({ data: 'False result!' });
            expect(axios.get).toHaveBeenCalledWith(
                'https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?c=Cocktail'
            );
        });
    });
});
