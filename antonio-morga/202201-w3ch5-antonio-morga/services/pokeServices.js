export const fetchPage = async (
    endpoint = `https://pokeapi.co/api/v2/pokemon/`
) => {
    const url = endpoint;
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
};

export const fetchPokemon = async (endpoint) => {
    const url = endpoint;
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
};
