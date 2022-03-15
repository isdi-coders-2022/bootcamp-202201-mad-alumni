import { Adviser } from './adviser.js';
import { Character } from './character.js';
import { King } from './king.js';
import { Knight } from './knight.js';
import { Squire } from './squire.js';
import { characters } from './characters.js';

characters.forEach((element) => {
    const template = `
<li class="character col">
                    <div class="card character__card">
                        <img
                            src=${element.img}
                            alt="Nombre y familia del personaje"
                            class="character__picture card-img-top"
                        />
                        <div class="card-body">
                            <h2 class="character__name card-title h4">
                                ${element.name} ${element.family}
                            </h2>
                            <div class="character__info">
                                <ul class="list-unstyled">
                                    <li>Edad: ${element.age}</li>
                                    <li>
                                        Estado:
                                        <i class="fas fa-thumbs-down"></i>
                                        <i class="fas fa-thumbs-up"></i>
                                    </li>
                                </ul>
                            </div>
                            <div class="character__overlay">
                                <ul class="list-unstyled">
                                    <li>Años de reinado: ${element.kingYears}</li>
                                    <li>Arma:${element.weapon}</li>
                                    <li>Destreza: ${element.skill}</li>
                                    <li>Peloteo: ${element.servility}</li>
                                    <li>Asesora a: ${element.patron} </li>
                                    <li>Sirve a: X</li>
                                </ul>
                                <div class="character__actions">
                                    <button class="character__action btn" id="speak">
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
                </li>
`;
    document.querySelector('.characters-list').innerHTML += template;
    const speaker = document.getElementById('speak');
    speaker.addEventListener('click', message);

    function message() {
        document.getElementById('speak').innerHTML = `${element.message}`;
    }
});
