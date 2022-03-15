export async function initiatePokemon(URL_POKE) {
    const resp = await fetch(URL_POKE);
    return await resp.json();
}
