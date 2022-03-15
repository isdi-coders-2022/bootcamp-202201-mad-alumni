import { King } from './classes/king.js';
import { Knight } from './classes/knight.js';
import { Counselor } from './classes/counselor.js';
import { Squire } from './classes/squire.js';

const main = () => {
    const joffrey = new King('Joffrey', 'Baratheon', 53, 10);
    const jamie = new Knight('Jamie', 'Lannister', 35, 'Espada', 9);
    const daenerys = new Knight('Daenerys', 'Targaryen', 28, 'Dragon', 8);
    const tyrion = new Counselor('Tyrion', 'Lannister', 38, daenerys);
    const bronn = new Squire('Bronn', 'Blackwater', 45, 6, jamie);

    const characterArray = [joffrey, jamie, daenerys, tyrion, bronn];
    characterArray.forEach((character) => {
        const characterCard = ` 
                <li class="character col">
                    <div class="card character__card">
                        <img
                            src="/img/${character.name.toLowerCase()}.jpeg"
                            alt="${character.name}${character.family}"
                            class="character__picture card-img-top"
                            id="${character.name.toLowerCase()}__picture"
                        />
                        <div class="card-body">
                            <h2 class="character__name card-title h4">
                                ${character.name} ${character.family}
                            </h2>
                            <div class="character__info">
                                <ul class="list-unstyled">
                                    <li>Edad: ${character.age}</li>
                                    <li>
                                        Estado:
                                        <i id="${character.name.toLowerCase()}-thumbs-up" class="hidden fas fa-thumbs-down"></i>
                                        <i id="${character.name.toLowerCase()}-thumbs-down" class="fas fa-thumbs-up"></i>
                                    </li>
                                </ul>
                            </div>
                            <div class="character__overlay">
                                <ul class="list-unstyled list--${character.name.toLowerCase()}">
                                    <li>Años de reinado: ${
                                        character.reignYears
                                    }</li>
                                    <li>Arma: ${character.weapon}</li>
                                    <li>Destreza: ${character.skill}</li>
                                    <li>Peloteo: ${character.peloteoLevel}</li>
                                    <li>Asesora a: ${character.counseled}</li>
                                    <li>Sirve a: ${character.patron}</li>
                                </ul>
                                <div class="character__actions">
                                    <button class="character__action ${
                                        character.name
                                    }__talk btn">
                                        habla
                                    </button>
                                    <button id="${character.name}__die"
                                    class="character__action btn">
                                        muere
                                    </button>
                                </div>
                            </div>
                        </div>
                        <i class="emoji"></i>
                    </div></li>`;
        document.querySelector('.characters-list').innerHTML += characterCard;

        switch (character.constructor.name) {
            case 'King':
                document.querySelector(
                    `.list--${character.name.toLowerCase()}`
                ).innerHTML = `
                    <li>Años de reinado: ${character.reignYears}</li>`;
                break;
            case 'Knight':
                document.querySelector(
                    `.list--${character.name.toLowerCase()}`
                ).innerHTML = `
                    <li>Arma: ${character.weapon}</li>
                    <li>Destreza: ${character.skill}</li>`;
                break;
            case 'Counselor':
                document.querySelector(
                    `.list--${character.name.toLowerCase()}`
                ).innerHTML = `
                    <li>Asesora a: ${character.counseled.name}</li>`;
                break;
            case 'Squire':
                document.querySelector(
                    `.list--${character.name.toLowerCase()}`
                ).innerHTML = `
                    <li>Peloteo: ${character.peloteoLevel}</li>
                    <li>Sirve a: ${character.patron.name}</li>`;
                break;
            default:
                break;
        }
    });

    characterArray.forEach((character) => {
        document
            .querySelector(`#${character.name}__die`)
            .addEventListener('click', () => {
                document
                    .querySelector(`#${character.name.toLowerCase()}__picture`)
                    .classList.toggle('upside-down');
                document
                    .querySelector(`#${character.name.toLowerCase()}-thumbs-up`)
                    .classList.toggle('hidden');
                document
                    .querySelector(
                        `#${character.name.toLowerCase()}-thumbs-down`
                    )
                    .classList.toggle('hidden');
            });
    });
};

document.addEventListener('DOMContentLoaded', main());
