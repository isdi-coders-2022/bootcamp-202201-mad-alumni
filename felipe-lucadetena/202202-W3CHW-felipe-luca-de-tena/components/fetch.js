export async function fetchData(URL) {
    const resp = await fetch(URL);
    const data = await resp.json();
    return data;
}

export async function fetchDetails(name) {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
}
