/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */
/* eslint-disable prefer-destructuring */
import { Component } from './Component.js';
import { Stars } from './Stars.js';

export class SeriesCard extends Component {
    constructor(serie) {
        super();
        this.template = this.generateTemplate(serie);
    }

    generateTemplate(serie) {
        let template = `<li class="serie" id="id${serie.id}">
                                <img
                                    class="serie__poster"
                                    src="${serie.poster}"
                                    alt="${serie.name} poster"
                                />
                                <h4 class="serie__title">${serie.name}</h4>
                                <p class="serie__info">${serie.creator} (${serie.year})</p>
                                <ul class="score ${serie.score}">`;
        template += new Stars(serie.score).template;
        template += `</ul>
                                <i class="fas fa-times-circle icon--delete"></i>
                            </li>`;
        return template;
    }
}
