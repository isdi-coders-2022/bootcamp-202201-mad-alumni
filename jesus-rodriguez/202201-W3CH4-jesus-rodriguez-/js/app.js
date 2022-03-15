import { ListPending } from '../components/pending-series.js';
import { ListWatched } from '../components/watched-series.js';

async function main() {
  const getInformation = async function () {
    const URL_SERIES = 'http://localhost:3000/series';

    const resp = await fetch(URL_SERIES);

    const data2 = await resp.json();

    return data2;
  };

  const allSeries = await getInformation();

  new ListPending(allSeries);
  new ListWatched(allSeries);
}
document.addEventListener('DOMContentLoaded', main);
