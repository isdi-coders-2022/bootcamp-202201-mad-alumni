import { AllPokemons } from '../../components/AllPokemons.js';
import { Header } from '../../components/Header.js';
import { MyPokemon } from '../../components/MyPokemon.js';
import { MyPokemons } from '../../components/MyPokemons.js';
import { Pokemon } from '../../components/Pokemon.js';

const app = () => {
    console.log('App Initialized');
    new Header();

    console.log(window.location.pathname);
    switch (window.location.pathname) {
        case '/public/index.html':
            new AllPokemons();
            break;
        case '/public/pokemon.html':
            new Pokemon();
            break;
        case '/public/my-pokemons.html':
            new MyPokemons();
            break;
        case '/public/my-pokemon.html':
            new MyPokemon();
            break;
    }
};

document.addEventListener('DOMContentLoaded', app);
