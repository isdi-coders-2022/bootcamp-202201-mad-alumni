import { Advisor } from './Advisor.js';
import { characters } from './characters.js';
import { King } from './King.js';
import { Knight } from './Knight.js';
import { Squire } from './Squire.js';

const main = () => {
    const characterListDOM = document.querySelector('.characters-list');
    const comunicationsContainer = document.querySelector('.comunications');
    const comunicationsText = document.querySelector('.comunications__text');
    const comunicationsPicture = document.querySelector(
        '.comunications__picture'
    );
    characters.forEach((character) => {
        const characterColumn = document.createElement('li');
        characterColumn.className = 'character';

        const characterCard = document.createElement('div');
        characterCard.className = 'card character_card';

        const characterImg = document.createElement('img');
        characterImg.src = `./img/${character.name.toLowerCase()}.jpg`;
        characterImg.setAttribute(
            'alt',
            `${character.name} ${character.family}`
        );
        characterImg.className = 'character__picture card-img-top';

        const characterCardBody = document.createElement('div');
        characterCardBody.className = 'card-body';

        const characterTitle = document.createElement('h2');
        characterTitle.textContent = `${character.name} ${character.family}`;
        characterTitle.className = 'character__name card-title h4';

        const characterInfoContainer = document.createElement('div');
        characterInfoContainer.className = 'character__info';

        const characterInfoList = document.createElement('ul');
        characterInfoList.className = 'list-unstyled';

        const characterInfoAge = document.createElement('li');
        characterInfoAge.textContent = `Age: ${character.age} years`;

        const characterStateListItem = document.createElement('li');
        characterStateListItem.textContent = 'State: ';

        const characterStateIcon = document.createElement('i');
        characterStateIcon.classList.add('fa');
        characterStateIcon.classList.add(
            character.state === 'alive' ? 'fa-thumbs-up' : 'fa-thumbs-down'
        );

        const characterOverlay = document.createElement('div');
        characterOverlay.className = 'character__overlay';

        const characterSkillList = document.createElement('ul');
        characterSkillList.className = 'list-unstyled';

        const characterSkillYearsRuling = document.createElement('li');
        characterSkillYearsRuling.textContent = `Years Ruling: ${
            character.yearsRuling ? character.yearsRuling : 'X'
        }`;

        const characterSkillWeapon = document.createElement('li');
        characterSkillWeapon.textContent = `Weapon: ${
            character.weapon ? character.weapon : 'X'
        }`;

        const characterDexterity = document.createElement('li');
        characterDexterity.textContent = `Dexterity: ${
            character.dexterity ? character.dexterity : 'X'
        }`;

        const characterServePoints = document.createElement('li');
        characterServePoints.textContent = `Serve Points: ${
            character.servePoints ? character.servePoints : 'X'
        }`;

        const characterKnightAdvised = document.createElement('li');
        characterKnightAdvised.textContent = `Advises: ${
            character.knightBeingAssessed
                ? `${character.knightBeingAssessed.name} ${character.knightBeingAssessed.family}`
                : 'X'
        }`;

        const characterAdvises = document.createElement('li');
        characterAdvises.textContent = `Serves: ${
            character.advises
                ? `${character.advises.name} ${character.advises.family}`
                : 'X'
        }`;

        if (character.yearsRuling) {
            characterSkillList.appendChild(characterSkillYearsRuling);
        }
        if (character.weapon) {
            characterSkillList.appendChild(characterSkillWeapon);
        }
        if (character.dexterity) {
            characterSkillList.appendChild(characterDexterity);
        }
        if (character.servePoints) {
            characterSkillList.appendChild(characterServePoints);
        }
        if (character.knightBeingAssessed) {
            characterSkillList.appendChild(characterKnightAdvised);
        }
        if (character.advises) {
            characterSkillList.appendChild(characterAdvises);
        }

        const characterActionsContainer = document.createElement('div');
        characterActionsContainer.className = 'character__actions';

        const characterTalkButton = document.createElement('button');
        characterTalkButton.className = 'character__action btn';
        characterTalkButton.textContent = 'Speak';

        characterTalkButton.addEventListener('click', () => {
            comunicationsContainer.classList.add('on');
            comunicationsText.textContent = `${character.phrase}`;
            comunicationsPicture.src = `./img/${character.name.toLowerCase()}.jpg`;

            setTimeout(() => {
                comunicationsContainer.classList.remove('on');
            }, 2000);
        });

        const characterKillButton = document.createElement('button');
        characterKillButton.className = 'character__action btn';
        characterKillButton.textContent = 'Kill';

        characterKillButton.addEventListener('click', () => {
            character.kill();
            characterStateIcon.classList.remove('fa-thumbs-up');
            characterStateIcon.classList.add('fa-thumbs-down');
            characterKillButton.classList.add('hide');
            characterReviveButton.classList.remove('hide');
        });

        const characterReviveButton = document.createElement('button');
        characterReviveButton.className = 'character__action btn hide';
        characterReviveButton.textContent = 'Revive';
        characterReviveButton.addEventListener('click', () => {
            character.state = 'alive';
            characterStateIcon.classList.remove('fa-thumbs-down');
            characterStateIcon.classList.add('fa-thumbs-up');
            characterKillButton.classList.remove('hide');
            characterReviveButton.classList.add('hide');
        });

        const characterClassEmoji = document.createElement('i');
        characterClassEmoji.className = 'emoji';
        characterClassEmoji.textContent =
            character instanceof King
                ? '👑'
                : character instanceof Knight
                ? '🗡'
                : character instanceof Advisor
                ? '🎓'
                : character instanceof Squire
                ? '🛡'
                : '';

        characterStateListItem.appendChild(characterStateIcon);

        characterInfoList.appendChild(characterInfoAge);
        characterInfoList.appendChild(characterStateListItem);

        characterInfoContainer.appendChild(characterInfoList);

        characterActionsContainer.appendChild(characterTalkButton);
        characterActionsContainer.appendChild(characterKillButton);
        characterActionsContainer.appendChild(characterReviveButton);

        characterOverlay.appendChild(characterSkillList);
        characterOverlay.appendChild(characterActionsContainer);

        characterCardBody.appendChild(characterTitle);
        characterCardBody.appendChild(characterInfoContainer);
        characterCardBody.appendChild(characterOverlay);

        characterCard.appendChild(characterImg);
        characterCard.appendChild(characterCardBody);
        characterCard.appendChild(characterClassEmoji);

        characterColumn.appendChild(characterCard);

        characterListDOM.appendChild(characterColumn);
    });
};

document.addEventListener('DOMContentLoaded', main);
