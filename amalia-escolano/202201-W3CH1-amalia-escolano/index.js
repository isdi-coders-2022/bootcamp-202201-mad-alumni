import { characters } from './modules/characters.js';

characters.forEach((element) => {
  const template = createCard(element);
  const newLi = document.createElement('li');
  newLi.classList.add('character', 'col');
  newLi.innerHTML = template;
  document.querySelector('.characters-list').appendChild(newLi);
  document.querySelector('.comunications__text').innerHTML = `${element.message}`;
});

function createCard(character) {
  if (!character.weapon) {
    character.weapon = 'Sin armas';
  }
  if (!character.servility) {
    character.servility = 0;
  }
  if (!character.skill) {
    character.skill = 0;
  }
  if (!character.patron) {
    character.patron = 'No asesora ni sirve a nadie';
  }
  if (!character.kingYears) {
    character.kingYears = 'No ha reinado...aún';
  }

  return `<div class="card character__card">
      <img src="img/${character.name}.jpg" alt="Nombre y familia del personaje" class="character__picture card-img-top" />
      <div class="card-body">
        <h2 class="character__name card-title h4">${character.name} ${character.family}</h2>
        <div class="character__info">
          <ul class="list-unstyled">
            <li>Edad: ${character.age} años</li>
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
            <button class="character__action btn talk">habla</button>
            <button class="character__action btn die">muere</button>
          </div>
        </div>
      </div>
      <i class="emoji">${character.emoji}</i>
    </div>`;
}
