import { Adviser } from './classes/Adviser.js';
import { King } from './classes/King.js';
import { Knight } from './classes/Knight.js';
import { Squire } from './classes/Squire.js';
import { chars } from 'characters.js';
import { Character } from './classes/Character.js

// bronn.patron = jaimeLannister;
console.log(chars);
chars.forEach((element) => {
    const template = `
        <li class="character col">
                        <div class="card character__card">
                            <img
                                src="img/${chars.name}.jpg"
                                alt="${chars.name} ${chars.family}"
                                class="character__picture card-img-top"
                            />
                            <div class="card-body">
                                <h2 class="character__name card-title h4">
                                    ${chars.name} ${chars.family}
                                </h2>
                                <div class="character__info">
                                    <ul class="list-unstyled">
                                        <li>Edad: ${chars.age} años</li>
                                        <li>
                                            Estado:
                                            <i class="fas fa-thumbs-down"></i>
                                            <i class="fas fa-thumbs-up"></i>
                                        </li>
                                    </ul>
                                </div>
                                <div class="character__overlay">
                                    <ul class="list-unstyled">
                                        <li >Años de reinado: ${chars.reigningYears}</li>
                                        <li>Arma: ${chars.weapon}</li>
                                        <li>Destreza: ${chars.skills}</li>
                                        <li>Peloteo: ${chars.servitude}</li>
                                        <li>Asesora a: ${chars.patron}</li>
                                        <li>Sirve a: ${chars.patron}</li>
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
                    </li>
                </ul>
    `;
    document.querySelector('.character-list').innerHTML += template;
});
