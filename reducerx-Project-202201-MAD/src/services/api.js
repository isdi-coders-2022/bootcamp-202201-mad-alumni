import axios from 'axios';

const COCKTAILS_API =
    'https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?c=Cocktail';

const FAV_COCKTAILS = 'http://localhost:4500/favorites/';

export function getAll() {
    return axios.get(COCKTAILS_API);
}
export function getAllFav() {
    return axios.get(FAV_COCKTAILS);
}
export function setFav(cocktail) {
    return axios.post(FAV_COCKTAILS, cocktail);
}
// export function update(cocktail) {
//     return axios.patch(COCKTAILS_API + cocktail.id, cocktail);
// }
export function removeFav(id) {
    return axios.delete(FAV_COCKTAILS + id);
}
export function getDetails(url) {
    return axios.get(url);
}
