export async function getDataFromApi() {
    const res = await fetch('http://localhost:3000/Pokemon');
    const data = await res.json();
    return data;
}
