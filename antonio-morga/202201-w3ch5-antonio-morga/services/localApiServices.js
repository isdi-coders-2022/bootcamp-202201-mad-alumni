export const releasePokemon = async (id) => {
    const url = `http://localhost:3005/pokemon/${id}`;
    const resp = await fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await resp.json();
    return data;
};

export const catchPokemon = async (object) => {
    const url = `http://localhost:3005/pokemon`;
    const allDataRespose = await fetch(url);
    const allData = await allDataRespose.json();
    let repeats = false;
    allData.forEach((entry) => {
        if (entry.url === object.url) repeats = true;
    });
    if (repeats) return 0;
    const resp = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(object),
    });
    const data = await resp.json();
    return data;
};

export const getAllCatched = async () => {
    const resp = await fetch(`http://localhost:3005/pokemon`);
    const data = await resp.json();
    return data;
};
