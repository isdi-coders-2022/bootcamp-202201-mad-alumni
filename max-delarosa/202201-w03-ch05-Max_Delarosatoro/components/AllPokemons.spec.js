import {
    getAllPokemonsByPage,
    getPokemonData,
} from '../services/apiRequests.js';
import { AllPokemons } from './AllPokemons.js';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/dom';

jest.mock('../services/apiRequests');
getAllPokemonsByPage.mockResolvedValue({
    count: 1118,
    next: 'https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20',
    previous: null,
    results: [
        {
            name: 'bulbasaur',
            url: 'https://pokeapi.co/api/v2/pokemon/1/',
        },
        {
            name: 'ivysaur',
            url: 'https://pokeapi.co/api/v2/pokemon/2/',
        },
        {
            name: 'venusaur',
            url: 'https://pokeapi.co/api/v2/pokemon/3/',
        },
        {
            name: 'charmander',
            url: 'https://pokeapi.co/api/v2/pokemon/4/',
        },
        {
            name: 'charmeleon',
            url: 'https://pokeapi.co/api/v2/pokemon/5/',
        },
        {
            name: 'charizard',
            url: 'https://pokeapi.co/api/v2/pokemon/6/',
        },
        {
            name: 'squirtle',
            url: 'https://pokeapi.co/api/v2/pokemon/7/',
        },
        {
            name: 'wartortle',
            url: 'https://pokeapi.co/api/v2/pokemon/8/',
        },
        {
            name: 'blastoise',
            url: 'https://pokeapi.co/api/v2/pokemon/9/',
        },
        {
            name: 'caterpie',
            url: 'https://pokeapi.co/api/v2/pokemon/10/',
        },
        {
            name: 'metapod',
            url: 'https://pokeapi.co/api/v2/pokemon/11/',
        },
        {
            name: 'butterfree',
            url: 'https://pokeapi.co/api/v2/pokemon/12/',
        },
        {
            name: 'weedle',
            url: 'https://pokeapi.co/api/v2/pokemon/13/',
        },
        {
            name: 'kakuna',
            url: 'https://pokeapi.co/api/v2/pokemon/14/',
        },
        {
            name: 'beedrill',
            url: 'https://pokeapi.co/api/v2/pokemon/15/',
        },
        {
            name: 'pidgey',
            url: 'https://pokeapi.co/api/v2/pokemon/16/',
        },
        {
            name: 'pidgeotto',
            url: 'https://pokeapi.co/api/v2/pokemon/17/',
        },
        {
            name: 'pidgeot',
            url: 'https://pokeapi.co/api/v2/pokemon/18/',
        },
        {
            name: 'rattata',
            url: 'https://pokeapi.co/api/v2/pokemon/19/',
        },
        {
            name: 'raticate',
            url: 'https://pokeapi.co/api/v2/pokemon/20/',
        },
    ],
});

getPokemonData.mockResolvedValue({
    name: 'Togepi',
});

test('AllPokemons Component renders', async () => {
    document.body.innerHTML = '<div id="all-pokemons"></div>';
    new AllPokemons();

    expect(screen.findAllByRole('listitem')).toHaveLength(20);
});
