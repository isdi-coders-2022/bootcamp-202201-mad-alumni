import { characterArray } from './personajes.js';
import { checkValue } from './checkvalue.js';

const main = () => {
  const speaks = document.querySelector('#speaks');
  const dead = document.querySelector('#dead');
  console.log(characterArray);

  characterArray.forEach((element) => {
    const cardTemplate = `<li class="character col">
        <div class="card character__card">
          <img
            src="./img/${element.name.toLowerCase()}.jpg"
            alt="Nombre y familia del personaje"
            class="character__picture card-img-top"
          />

          <div class="card-body">
            <h2 class="character__name card-title h4">${checkValue(
              element.name
            )} ${checkValue(element.family)} </h2>
            <div class="character__info">
              <ul class="list-unstyled">
                <li>Edad: ${checkValue(element.age)} años</li>
                <li>
                  Estado:
                  <i class="fas fa-thumbs-down"></i>
                  <i class="fas fa-thumbs-up"></i>
                </li>
              </ul>
            </div>
            <div class="character__overlay">
              <ul class="list-unstyled">
                <li>Años de reinado: ${checkValue(element.reignYears)}</li>
                <li>Arma: ${checkValue(element.weapon)}</li>
                <li>Destreza: ${checkValue(element.skill)}</li>
                <li>Peloteo: ${checkValue(element.servility)}</li>
                <li>Asesora a: ${checkValue(element.client)}</li>
                <li>Sirve a: ${checkValue(element.client)}</li>
              </ul>
              <div class="character__actions">
                <button id="speaks" class="character__action btn">Habla</button>
                <button id="dead" class="character__action btn">Muere</button>
              </div>
            </div>
          </div>
          <i class="emoji"></i>
        </div>
      </li>`;

    document.querySelector('.characters-list').innerHTML += cardTemplate;
  });
};

document.addEventListener('DOMContentLoaded', main);
