import { Character } from "./Personaje.js";
import { Advisor } from "./Asesor.js";
import { Squire } from "./Escudero.js";
import { Knight } from "./Luchador.js";
import { King } from "./Rey.js";
import { characters } from "./personajes.js";

//console.log(characters);

//characters.forEach;

characters.forEach((character) => {
    console.log(character);
    const template = `
 <li class="character col">
                    <div class="card character__card">
                        <img
                            src="${character.image}"
                            alt="Nombre y familia del personaje"
                            class="character__picture card-img-top"
                        />
                        <div class="card-body">
                            <h2 class="character__name card-title h4">
                                ${character.name}
                                ${character.family}
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
                                <ul class="list-unstyled">
                                    <li>Años de reinado: ${character.kingYears}</li>
                                    <li>Arma: ${character.weapon}</li>
                                    <li>Destreza: ${character.skill}</li>
                                    <li>Peloteo: ${character.servility}</li>
                                    <li>Asesora a: ${character.patron}</li>
                                    <li>Sirve a: ${character.patron}</li>
                                </ul>
                                <div class="character__actions">
                                    <button class="character__action btn">
                                        ${character.message}
                                    </button>
                                    <button class="character__action btn">
                                        ${character.message}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <i class="emoji"></i>
                    </div>
                </li>`;

    //console.log(template);
    if (typeof character.weapon === undefined) {
        character.weapon = "";
    }
    document.querySelector(".characters-list").innerHTML += template;
});
