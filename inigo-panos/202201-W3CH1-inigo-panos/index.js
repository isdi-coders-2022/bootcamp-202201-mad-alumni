import { characters } from './personajes.js';
import { Personaje } from './personaje.js';
import { Rey } from './rey.js';
import { Escudero } from './escudero.js';
import { Luchador } from './luchador.js';
import { Asesor } from './asesor.js';

const personas = characters;

personas.forEach((personaje) => {
    console.log(personaje);

    const template = `
    <li class="character col">
        <div class="card character__card">
            <img
                src="${personaje.imagen}"
                alt="${personaje.nombre}"
                class="character__picture card-img-top"
            />
            <div class="card-body">
                <h2 class="character__name card-title h4">${personaje.nombre} ${personaje.familia}</h2>
                <div class="character__info">
                    <ul class="list-unstyled">
                        <li>Edad:${personaje.edad}</li>
                        <li>
                            Estado:
                            <i class="fas fa-thumbs-down"></i>
                            <i class="fas fa-thumbs-up"></i>
                        </li>
                    </ul>
                </div>
                <div class="character__overlay">
                    <ul class="list-unstyled">
                        <li>${personaje.añosReinado}</li>
                        <li>${personaje.arma}</li>
                        <li>${personaje.destreza}</li>
                        <li>${personaje.peloteo}</li>
                        <li>${personaje.patron}</li>
                        <li>${personaje.patron}</li>
                    </ul>
                    <div class="character__actions">
                        <button class="character__action btn">habla</button>
                        <button class="character__action btn">muere</button>
                    </div>
                </div>
            </div>
            <i class="emoji"></i>
        </div>
    </li>
`;

    document.querySelector('.characters-list').innerHTML += template;
});
