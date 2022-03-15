export const getAllPokemonsByPage = async (offset) => {
    const fetchUrl = `https://pokeapi.co/api/v2/pokemon/?&limit=20&offset=${offset}`;
    const response = await fetch(fetchUrl);
    const data = await response.json();
    return data;
};

export const getPokemonData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
};

export const getPokemonDataById = async (id) => {
    const fetchUrl = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const response = await fetch(fetchUrl);
    const data = await response.json();
    return data;
};

export const getMyPokemonDataById = async (id) => {
    const fetchUrl = `http://localhost:3000/pokemon/${id}`;
    const response = await fetch(fetchUrl);
    const data = await response.json();
    return data;
};

export const patchMyPokemon = async (id, payload) => {
    const fetchUrl = `http://localhost:3000/pokemon/${id}`;
    const response = await fetch(fetchUrl, {
        headers: { 'Content-Type': 'application/json' },
        method: 'PATCH',
        body: JSON.stringify(payload),
    });
    const data = await response.json();
    return data;
};

export const deleteMyPokemon = async (id) => {
    const fetchUrl = `http://localhost:3000/pokemon/${id}`;
    const response = await fetch(fetchUrl, {
        method: 'DELETE',
    });
    const data = await response.json();
    return data;
};
