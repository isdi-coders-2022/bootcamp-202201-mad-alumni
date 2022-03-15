import { Person } from './Person.js';
import { Squire } from './Squire.js';
import { Knight } from './Knight.js';
import { Adviser } from './Adviser.js';
import { King } from './King.js';
import { characters } from './Characters.js';

characters.forEach((character) => {
    const template = ` <li class="character col">
    <div class="card character__card">
        <img
            src=${character.img}
            alt="Nombre y familia del personaje"
            class="character__picture card-img-top"
        />
        <div class="card-body">
            <h2 class="character__name card-title h4">
            ${character.name}
            </h2>
            <div class="character__info">
                <ul class="list-unstyled">
                    <li>Edad: ${character.age}</li>
                    <li>
                        Estado:
                        <i class="fas fa-thumbs-down"></i>
                        <i class="fas fa-thumbs-up"></i>
                    </li>
                </ul>
            </div>
            <div class="character__overlay">
                <ul class="list-unstyled list__${character}">
                    <li>Años de reinado: ${character.yearsasking}</li>
                    <li>Arma: ${character.weapon}</li>
                    <li>Destreza: ${character.skill}</li>
                    <li>Asesora a: ${character.patron}</li>
                </ul>
                <div class="character__actions">
                    <button class="character__action btn">
                        habla
                    </button>
                    <button class="character__action btn">
                        muere
                    </button>
                </div>
            </div>
        </div>
        <i class="emoji"></i>
    </div>
</li>`;

    document.querySelector('.characters-list').innerHTML += template;

    switch (character) {
        case 'jB':
            document.querySelector(
                `.list__${character}`
            ).innerHTML = `<li>Años de reinado: ${character.yearsasking}</li>`;

            break;
        case 'dT':
            document.querySelector(
                `list__${character}`
            ).innerHTML = `<li>Arma: ${character.weapon}</li> <li>Destreza: ${character.skill}</li>`;

            break;
        case 'JL':
            document.querySelector(
                `.list__${character}`
            ).innerHTML = `<li>Arma: ${character.weapon}</li> <li>Destreza: ${character.skill}</li><li>Asesora a: ${character.patron}</li>`;

            break;
        case 'B':
            document.querySelector(
                `list__${character}`
            ).innerHTML = `<li>Arma: ${character.weapon}</li> <li>Destreza: ${character.skill}</li><li>Asesora a: ${character.patron}</li>`;

            break;
    }
});
