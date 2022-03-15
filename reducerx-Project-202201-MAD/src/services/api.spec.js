import axios from 'axios';
import { getAll, getAllFav, removeFav, setFav } from './api';

jest.mock('axios');

describe('Given API functions', () => {
    describe('when getAll is called', () => {
        beforeEach(() => {
            axios.get.mockResolvedValue({ data: 'Mocked result' });
        });
        test('data is fetched', async () => {
            expect(await getAll()).toEqual({ data: 'Mocked result' });
            expect(axios.get).toHaveBeenCalledWith(
                'https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?c=Cocktail'
            );
        });
    });
    describe('when getAllFav is called', () => {
        beforeEach(() => {
            axios.get.mockResolvedValue({ data: 'Mocked result fav' });
        });
        test('data is fetched', async () => {
            expect(await getAllFav()).toEqual({ data: 'Mocked result fav' });
            expect(axios.get).toHaveBeenCalledWith(
                'http://localhost:4500/favorites/'
            );
        });
    });
});

describe('when removeFav is called', () => {
    beforeEach(() => {
        axios.delete.mockResolvedValue({ data: 'Mocked delete fav' });
    });
    test('data is fetched', async () => {
        expect(await removeFav(2)).toEqual({
            data: 'Mocked delete fav',
        });
        expect(axios.delete).toHaveBeenLastCalledWith(
            `http://localhost:4500/favorites/2`
        );
    });
});
describe('when setFav is called', () => {
    beforeEach(() => {
        axios.post.mockResolvedValue({ data: 'Mocked add fav' });
    });
    test('data is fetched', async () => {
        expect(await setFav('Aquamarine')).toEqual({
            data: 'Mocked add fav',
        });
        expect(axios.post).toHaveBeenLastCalledWith(
            `http://localhost:4500/favorites/`,
            'Aquamarine'
        );
    });
});
