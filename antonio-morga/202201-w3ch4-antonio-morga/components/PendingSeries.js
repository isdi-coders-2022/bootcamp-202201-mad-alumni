/* eslint-disable no-param-reassign */
/* eslint-disable prefer-destructuring */
import { Component } from './Component.js';
import { SeriesCard } from './SeriesCard.js';

export class PendingSeriesList extends Component {
    constructor(seriesArray, selector = '.series-pending') {
        super();
        this.seriesArray = seriesArray;
        this.selector = selector;
        this.template = this.generateTemplate(this.seriesArray);
        this.renderOuter(this.selector);
        this.assignHandler();
    }

    generateTemplate(seriesArray) {
        let template = `<section class="series-pending">
                            <h3 class="subsection-title">Pending series</h3>
                            <p class="info">You have ${seriesArray.length} series pending to watch</p>
                            <ul class="series-list">`;
        seriesArray.forEach((serie) => {
            template += new SeriesCard(serie, '.series-list').template;
        });
        template += '</ul>';
        return template;
    }

    assignHandler() {
        this.seriesArray.forEach((serie) => this.handleStarEvent(serie));
        this.seriesArray.forEach((serie) => this.handleDeleteEvent(serie));
    }

    handleStarEvent(serie) {
        const serieCard = document.querySelector(`#id${serie.id}`);
        const stars = serieCard.querySelectorAll('.icon--score');
        stars.forEach((star) => {
            star.addEventListener('click', () => {
                serie.score = +star.classList[1];
                serie.watched = true;
                this.seriesArray = this.modifySerie(serie);
                this.generateTemplate(serie);
                this.renderOuter(this.selector);
            });
        });
    }

    handleDeleteEvent(serie) {
        const serieCard = document.querySelector(`#id${serie.id}`);
        const stars = serieCard.querySelectorAll('.icon--delete');
        stars.forEach((star) => {
            star.addEventListener('click', () => {
                serie.score = +star.classList[1];
                serie.watched = true;
                this.seriesArray = this.deleteSerie(serie);
                this.generateTemplate(serie);
                this.renderOuter(this.selector);
            });
        });
    }
}
