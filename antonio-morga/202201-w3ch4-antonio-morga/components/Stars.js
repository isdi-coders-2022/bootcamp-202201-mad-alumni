import { Component } from './Component.js';

export class Stars extends Component {
    constructor(score) {
        super();
        this.template = this.generateTemplate(score);
    }

    generateTemplate(score) {
        let stars = score;
        let template = '';
        for (let i = 1; i < 6; i += 1) {
            if (stars > 0) {
                template += `
                    <li class="score__star">
                        <i
                            class="icon--score ${i} fas fa-star"
                            title="${i}/5"
                        ></i>
                    </li>`;
            } else {
                template += `<li class="score__star">
                        <i
                            class="icon--score ${i} far fa-star"
                            title="${i}/5"
                        ></i>
                    </li>`;
            }
            stars -= 1;
        }

        return template;
    }
}
