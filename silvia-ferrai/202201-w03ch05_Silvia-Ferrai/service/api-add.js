export async function postData(pokemon) {
    const url = 'http://localhost:3000/pokemon';
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',

        headers: {
            'Content-Type': 'application/json',
        },

        body: JSON.stringify(pokemon),
    });
    return response.json();
}
