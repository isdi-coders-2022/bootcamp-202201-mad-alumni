import { screen } from '@testing-library/dom';
import { MyPokemons } from './MyPokemons.js';
import { getPokemonData } from '../services/apiRequests.js';

jest.mock('../services/apiRequests.js');

getPokemonData.mockResolvedValue([
    {
        myId: 2,
        name: 'ivysaur',
        pokemonName: 'ivysaur',
        sprites: {
            back_default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png',
            back_female: null,
            back_shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/2.png',
            back_shiny_female: null,
            front_default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
            front_female: null,
            front_shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/2.png',
            front_shiny_female: null,
            other: {
                dream_world: {
                    front_default:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg',
                    front_female: null,
                },
                home: {
                    front_default:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/2.png',
                    front_female: null,
                    front_shiny:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/2.png',
                    front_shiny_female: null,
                },
                'official-artwork': {
                    front_default:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png',
                },
            },
            versions: {
                'generation-i': {
                    'red-blue': {
                        back_default:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/2.png',
                        back_gray:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/2.png',
                        back_transparent:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/back/2.png',
                        front_default:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/2.png',
                        front_gray:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/2.png',
                        front_transparent:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/2.png',
                    },
                    yellow: {
                        back_default:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/2.png',
                        back_gray:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/2.png',
                        back_transparent:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/transparent/back/2.png',
                        front_default:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/2.png',
                        front_gray:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/2.png',
                        front_transparent:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/transparent/2.png',
                    },
                },
                'generation-ii': {
                    crystal: {
                        back_default:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/2.png',
                        back_shiny:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/2.png',
                        back_shiny_transparent:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/back/shiny/2.png',
                        back_transparent:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/back/2.png',
                        front_default:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/2.png',
                        front_shiny:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/2.png',
                        front_shiny_transparent:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/shiny/2.png',
                        front_transparent:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/2.png',
                    },
                    gold: {
                        back_default:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/2.png',
                        back_shiny:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/2.png',
                        front_default:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/2.png',
                        front_shiny:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/2.png',
                        front_transparent:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/transparent/2.png',
                    },
                    silver: {
                        back_default:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/2.png',
                        back_shiny:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/2.png',
                        front_default:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/2.png',
                        front_shiny:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/2.png',
                        front_transparent:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/transparent/2.png',
                    },
                },
                'generation-iii': {
                    emerald: {
                        front_default:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/2.png',
                        front_shiny:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/2.png',
                    },
                    'firered-leafgreen': {
                        back_default:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/2.png',
                        back_shiny:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/2.png',
                        front_default:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/2.png',
                        front_shiny:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/2.png',
                    },
                    'ruby-sapphire': {
                        back_default:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/2.png',
                        back_shiny:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/2.png',
                        front_default:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/2.png',
                        front_shiny:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/2.png',
                    },
                },
                'generation-iv': {
                    'diamond-pearl': {
                        back_default:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/2.png',
                        back_female: null,
                        back_shiny:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/2.png',
                        back_shiny_female: null,
                        front_default:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/2.png',
                        front_female: null,
                        front_shiny:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/2.png',
                        front_shiny_female: null,
                    },
                    'heartgold-soulsilver': {
                        back_default:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/2.png',
                        back_female: null,
                        back_shiny:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/2.png',
                        back_shiny_female: null,
                        front_default:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/2.png',
                        front_female: null,
                        front_shiny:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/2.png',
                        front_shiny_female: null,
                    },
                    platinum: {
                        back_default:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/2.png',
                        back_female: null,
                        back_shiny:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/2.png',
                        back_shiny_female: null,
                        front_default:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/2.png',
                        front_female: null,
                        front_shiny:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/2.png',
                        front_shiny_female: null,
                    },
                },
                'generation-v': {
                    'black-white': {
                        animated: {
                            back_default:
                                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/2.gif',
                            back_female: null,
                            back_shiny:
                                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/2.gif',
                            back_shiny_female: null,
                            front_default:
                                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/2.gif',
                            front_female: null,
                            front_shiny:
                                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/2.gif',
                            front_shiny_female: null,
                        },
                        back_default:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/2.png',
                        back_female: null,
                        back_shiny:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/2.png',
                        back_shiny_female: null,
                        front_default:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/2.png',
                        front_female: null,
                        front_shiny:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/2.png',
                        front_shiny_female: null,
                    },
                },
                'generation-vi': {
                    'omegaruby-alphasapphire': {
                        front_default:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/2.png',
                        front_female: null,
                        front_shiny:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/2.png',
                        front_shiny_female: null,
                    },
                    'x-y': {
                        front_default:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/2.png',
                        front_female: null,
                        front_shiny:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/2.png',
                        front_shiny_female: null,
                    },
                },
                'generation-vii': {
                    icons: {
                        front_default:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/2.png',
                        front_female: null,
                    },
                    'ultra-sun-ultra-moon': {
                        front_default:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/2.png',
                        front_female: null,
                        front_shiny:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/2.png',
                        front_shiny_female: null,
                    },
                },
                'generation-viii': {
                    icons: {
                        front_default:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/2.png',
                        front_female: null,
                    },
                },
            },
        },
        abilities: [
            {
                ability: {
                    name: 'overgrow',
                    url: 'https://pokeapi.co/api/v2/ability/65/',
                },
                is_hidden: false,
                slot: 1,
            },
            {
                ability: {
                    name: 'chlorophyll',
                    url: 'https://pokeapi.co/api/v2/ability/34/',
                },
                is_hidden: true,
                slot: 3,
            },
        ],
        weight: 130,
        types: [
            {
                slot: 1,
                type: {
                    name: 'grass',
                    url: 'https://pokeapi.co/api/v2/type/12/',
                },
            },
            {
                slot: 2,
                type: {
                    name: 'poison',
                    url: 'https://pokeapi.co/api/v2/type/4/',
                },
            },
        ],
        id: 1,
    },
    {
        myId: 2,
        name: 'Yilbert',
        pokemonName: 'ivysaur',
        sprites: {
            back_default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png',
            back_female: null,
            back_shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/2.png',
            back_shiny_female: null,
            front_default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
            front_female: null,
            front_shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/2.png',
            front_shiny_female: null,
            other: {
                dream_world: {
                    front_default:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg',
                    front_female: null,
                },
                home: {
                    front_default:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/2.png',
                    front_female: null,
                    front_shiny:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/2.png',
                    front_shiny_female: null,
                },
                'official-artwork': {
                    front_default:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png',
                },
            },
            versions: {
                'generation-i': {
                    'red-blue': {
                        back_default:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/2.png',
                        back_gray:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/2.png',
                        back_transparent:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/back/2.png',
                        front_default:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/2.png',
                        front_gray:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/2.png',
                        front_transparent:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/2.png',
                    },
                    yellow: {
                        back_default:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/2.png',
                        back_gray:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/2.png',
                        back_transparent:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/transparent/back/2.png',
                        front_default:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/2.png',
                        front_gray:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/2.png',
                        front_transparent:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/transparent/2.png',
                    },
                },
                'generation-ii': {
                    crystal: {
                        back_default:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/2.png',
                        back_shiny:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/2.png',
                        back_shiny_transparent:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/back/shiny/2.png',
                        back_transparent:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/back/2.png',
                        front_default:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/2.png',
                        front_shiny:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/2.png',
                        front_shiny_transparent:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/shiny/2.png',
                        front_transparent:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/2.png',
                    },
                    gold: {
                        back_default:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/2.png',
                        back_shiny:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/2.png',
                        front_default:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/2.png',
                        front_shiny:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/2.png',
                        front_transparent:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/transparent/2.png',
                    },
                    silver: {
                        back_default:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/2.png',
                        back_shiny:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/2.png',
                        front_default:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/2.png',
                        front_shiny:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/2.png',
                        front_transparent:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/transparent/2.png',
                    },
                },
                'generation-iii': {
                    emerald: {
                        front_default:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/2.png',
                        front_shiny:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/2.png',
                    },
                    'firered-leafgreen': {
                        back_default:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/2.png',
                        back_shiny:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/2.png',
                        front_default:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/2.png',
                        front_shiny:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/2.png',
                    },
                    'ruby-sapphire': {
                        back_default:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/2.png',
                        back_shiny:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/2.png',
                        front_default:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/2.png',
                        front_shiny:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/2.png',
                    },
                },
                'generation-iv': {
                    'diamond-pearl': {
                        back_default:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/2.png',
                        back_female: null,
                        back_shiny:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/2.png',
                        back_shiny_female: null,
                        front_default:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/2.png',
                        front_female: null,
                        front_shiny:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/2.png',
                        front_shiny_female: null,
                    },
                    'heartgold-soulsilver': {
                        back_default:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/2.png',
                        back_female: null,
                        back_shiny:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/2.png',
                        back_shiny_female: null,
                        front_default:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/2.png',
                        front_female: null,
                        front_shiny:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/2.png',
                        front_shiny_female: null,
                    },
                    platinum: {
                        back_default:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/2.png',
                        back_female: null,
                        back_shiny:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/2.png',
                        back_shiny_female: null,
                        front_default:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/2.png',
                        front_female: null,
                        front_shiny:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/2.png',
                        front_shiny_female: null,
                    },
                },
                'generation-v': {
                    'black-white': {
                        animated: {
                            back_default:
                                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/2.gif',
                            back_female: null,
                            back_shiny:
                                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/2.gif',
                            back_shiny_female: null,
                            front_default:
                                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/2.gif',
                            front_female: null,
                            front_shiny:
                                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/2.gif',
                            front_shiny_female: null,
                        },
                        back_default:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/2.png',
                        back_female: null,
                        back_shiny:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/2.png',
                        back_shiny_female: null,
                        front_default:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/2.png',
                        front_female: null,
                        front_shiny:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/2.png',
                        front_shiny_female: null,
                    },
                },
                'generation-vi': {
                    'omegaruby-alphasapphire': {
                        front_default:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/2.png',
                        front_female: null,
                        front_shiny:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/2.png',
                        front_shiny_female: null,
                    },
                    'x-y': {
                        front_default:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/2.png',
                        front_female: null,
                        front_shiny:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/2.png',
                        front_shiny_female: null,
                    },
                },
                'generation-vii': {
                    icons: {
                        front_default:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/2.png',
                        front_female: null,
                    },
                    'ultra-sun-ultra-moon': {
                        front_default:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/2.png',
                        front_female: null,
                        front_shiny:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/2.png',
                        front_shiny_female: null,
                    },
                },
                'generation-viii': {
                    icons: {
                        front_default:
                            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/2.png',
                        front_female: null,
                    },
                },
            },
        },
        abilities: [
            {
                ability: {
                    name: 'overgrow',
                    url: 'https://pokeapi.co/api/v2/ability/65/',
                },
                is_hidden: false,
                slot: 1,
            },
            {
                ability: {
                    name: 'chlorophyll',
                    url: 'https://pokeapi.co/api/v2/ability/34/',
                },
                is_hidden: true,
                slot: 3,
            },
        ],
        weight: 130,
        types: [
            {
                slot: 1,
                type: {
                    name: 'grass',
                    url: 'https://pokeapi.co/api/v2/type/12/',
                },
            },
            {
                slot: 2,
                type: {
                    name: 'poison',
                    url: 'https://pokeapi.co/api/v2/type/4/',
                },
            },
        ],
        id: 2,
    },
]);

test('MyPokemons Component renders', async () => {
    document.body.innerHTML = `<div id="my-pokemons"></div>`;

    new MyPokemons();

    expect(await screen.findAllByRole('listitem')).toHaveLength(2);
});
