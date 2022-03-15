/* eslint-disable no-unused-expressions */
import { PendingSeriesList } from '../components/PendingSeries.js';
import { WatchedSeriesList } from '../components/WathedSeries.js';

(() => {
    const app = async () => {
        const getData = async () => {
            const apiUrl = 'http://localhost:3004/series';
            const response = await fetch(apiUrl);
            const data = await response.json();
            return data;
        };

        const totalSeries = await getData();
        const pendingSeries = [];
        const watchedSeries = [];
        totalSeries.forEach((serie) => {
            serie.watched
                ? watchedSeries.push(serie)
                : pendingSeries.push(serie);
        });

        new PendingSeriesList(pendingSeries);
        new WatchedSeriesList(watchedSeries);
    };
    document.addEventListener('DOMContentLoaded', app);
})();
