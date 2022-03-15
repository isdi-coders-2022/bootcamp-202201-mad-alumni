/* eslint-disable no-param-reassign */
import { Component } from './Component.js';
import { SeriesCard } from './SeriesCard.js';

export class WatchedSeriesList extends Component {
    constructor(seriesArray, selector = '.series-watched') {
        super();
        this.seriesArray = seriesArray;
        this.selector = selector;
        this.template = this.generateTemplate(this.seriesArray);
        this.renderOuter(this.selector);
        this.assignHandler(this.seriesArray);
    }

    assignHandler() {
        this.seriesArray.forEach((serie) => this.handleDeleteEvent(serie));
    }

    generateTemplate(seriesArray) {
        let template = `<section class="series-watched">
                            <h3 class="subsection-title">Watched series</h3>
                            <p class="info">You have watched ${seriesArray.length} series</p>
                            <ul class="series-list series-list--watched">`;
        seriesArray.forEach((serie) => {
            template += new SeriesCard(serie, '.series-list--watched').template;
        });
        template += '</ul>';
        return template;
    }

    handleDeleteEvent(serie) {
        const serieCard = document.querySelector(`#id${serie.id}`);
        const stars = serieCard.querySelectorAll('.icon--delete');
        stars.forEach((star) => {
            star.addEventListener('click', () => {
                serie.score = 0;
                serie.watched = false;
                this.seriesArray = this.modifySerie(serie);
                this.generateTemplate(serie);
                this.renderOuter(this.selector);
            });
        });
    }
}
