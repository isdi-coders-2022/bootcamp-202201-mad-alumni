const letters = document.querySelectorAll('.letter');
const container = document.querySelector('.pasapalabra-circle');

const radius = container.clientHeight;
const circleArray = [];
const mainHeight = container.offsetHeight;


const angles = [];

for (let i = 0; i < 27; i++) {
    angles.push(-(Math.PI * 2)/27 * i);
}

for (let i = 0; i < 27; i++) {
    const obj = {};
    obj.posX = (Math.round(radius * (Math.cos(angles[i]))))/2 + 'px';
    obj.posY = (Math.round(radius * (Math.sin(angles[i]))))/2 + 'px';
    circleArray.push(obj);
}

for (let i = 0; i < 27; i++) {
    letters[i].style.top = ((mainHeight / 2) - parseInt(circleArray[i].posY.slice(0, -2))) + 'px';
    letters[i].style.left = ((mainHeight / 2) + parseInt(circleArray[i].posX.slice(0, -2))) + 'px';
}

container.classList.add('rotate-container');
letters.forEach(letter => letter.classList.add('rotate-letter'));