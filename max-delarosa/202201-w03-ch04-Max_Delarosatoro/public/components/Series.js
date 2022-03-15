import { Component } from './Component.js';

export class Series extends Component {
    constructor() {
        super();
        this.fetchUrl = 'http://localhost:3000/series';
        this.initializeComponent();
    }

    async initializeComponent() {
        this.series = await this.getSeries();
        this.template = '';
        this.reRender();
    }

    async getSeries() {
        const response = await fetch(this.fetchUrl);
        const data = await response.json();
        return data;
    }

    async updateDB(updatedItem) {
        const payload = JSON.stringify(updatedItem);
        console.log(payload);
        const fetchUrlParams = `/${updatedItem.id}`;
        const fetchUrlUpdate = this.fetchUrl + fetchUrlParams;
        await fetch(fetchUrlUpdate, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'PUT',
            body: payload,
        });
        await this.initializeComponent();
    }

    async patchDB(id, changeObj) {
        console.log(id, changeObj);
        const patchUrl = this.fetchUrl + `/${id}`;
        await fetch(patchUrl, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'PATCH',
            body: JSON.stringify(changeObj),
        });
        await this.initializeComponent();
    }

    async deleteDB(id) {
        const fetchUrlParams = `/${id}`;
        const fetchUrlDelete = this.fetchUrl + fetchUrlParams;
        await fetch(fetchUrlDelete, {
            // headers: {
            //     'Content-Type': 'application/json',
            // },
            method: 'DELETE',
        });
        await this.initializeComponent();
    }

    generateTemplate() {
        this.generatePendingTemplate();
        this.generateWatchedTemplate();
    }

    reRender() {
        this.generateTemplate();
        this.render('.series');
        this.manageComponent('.series-list--pending');
        this.manageComponent('.series-list--watched');
    }

    generatePendingTemplate() {
        const unwatchedSeries = this.series.filter((serie) => !serie.watched);
        this.template = `
            <h3 class="subsection-title">Pending series</h3>
            ${
                unwatchedSeries.length > 0
                    ? `<p class="info">You have ${unwatchedSeries.length} series pending to watch</p>`
                    : `<p class="info">Congrats! You've watched all your series</p>`
            }
            <ul class="series-list series-list--pending">
        `;
        unwatchedSeries.forEach((serie) => {
            this.template += `
                <li class="serie" data-id="${serie.id}">
                    <img
                        class="serie__poster"
                        src="${serie.poster}"
                        alt="${serie.name} poster"
                    />
                    <h4 class="serie__title">${serie.name}</h4>
                    <p class="serie__info">${serie.creator} (${serie.year})</p>
                    <ul class="score">`;
            for (let i = 0; i < 5; i++) {
                this.template += `
                        <li class="score__star">
                            <i
                                class="icon--score far fa-star"
                                title="${i + 1}/5"
                            ></i>
                        </li>`;
            }
            this.template += `
                    </ul>
                    <i class="fas fa-times-circle icon--delete" data-id="${serie.id}"></i>
                </li>
            `;
        });
        this.template += '</ul>';
    }

    generateWatchedTemplate() {
        const watchedSeries = this.series.filter((serie) => serie.watched);
        this.template += `
            <h3 class="subsection-title">Watched series</h3>
            ${
                watchedSeries.length > 0
                    ? `<p class="info">You have watched ${watchedSeries.length} series</p>`
                    : `<p class="info">You already have not watched any serie</p>`
            }
            <ul class="series-list series-list--watched">
        `;
        watchedSeries.forEach((serie) => {
            const score = serie.score;
            this.template += `
                <li class="serie" data-id="${serie.id}">
                    <img
                        class="serie__poster"
                        src="${serie.poster}"
                        alt="${serie.name} poster"
                    />
                    <h4 class="serie__title">${serie.name}</h4>
                    <p class="serie__info">${serie.creator} (${serie.year})</p>
                    <ul class="score">`;
            this.handleScore(score);
            this.template += `
            </ul>
            <i class="fas fa-times-circle icon--delete" data-id="${serie.id}"></i>
            </li>
            `;
        });
        this.template += '</ul>';
    }

    handleScore(score) {
        for (let i = 0; i < score; i++) {
            this.template += `
                <li class="score__star">
                    <i class="icon-score fas fa-star" title="${i + 1}/5"></i>
                </li>
                `;
        }
        for (let i = 0; i < 5 - score; i++) {
            this.template += `
                <li class="score__star">
                    <i class="icon-score far fa-star" title="${
                        score + i + 1
                    }/5"></i>
                </li>
                `;
        }
    }

    manageComponent(hook) {
        const seriesContainer = document.querySelector(hook);
        const seriesElements = seriesContainer.querySelectorAll('.serie');
        seriesElements.forEach((serieElement) => {
            const serieElementId = serieElement.dataset.id;
            const serieIndex = this.series.findIndex(
                (serie) => serie.id === +serieElementId
            );

            const starElements = serieElement.querySelectorAll('.score__star');
            starElements.forEach((starElement) => {
                const starId = Number(
                    starElement.children[0].getAttribute('title').split('')[0]
                );
                starElement.addEventListener('click', (e) => {
                    this.series[serieIndex].score = starId;
                    if (hook === '.series-list--pending') {
                        this.series[serieIndex].watched = true;
                    }
                    this.updateDB(this.series[serieIndex]);
                });
            });

            const posterElement = serieElement.querySelector('.serie__poster');
            posterElement.addEventListener('click', () => {
                this.series[serieIndex].watched =
                    !this.series[serieIndex].watched;
                this.patchDB(this.series[serieIndex].id, {
                    watched: this.series[serieIndex].watched,
                });
            });

            const deleteButton = serieElement.querySelector('.icon--delete');
            deleteButton.addEventListener('click', () => {
                // this.series.splice(serieIndex, 1);
                this.deleteDB(serieElementId);
            });
        });
    }
}
