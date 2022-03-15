const FETCH_URL = 'http://localhost:4500/users/';

export async function set(payload) {
    const response = await fetch(FETCH_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });
    const data = await response.json();
    return data;
}

export async function getAll() {
    const response = await fetch(FETCH_URL);
    const data = await response.json();
    return data;
}
