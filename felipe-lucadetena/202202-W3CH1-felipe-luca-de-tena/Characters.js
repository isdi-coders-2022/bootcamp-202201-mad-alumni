import { Squire } from './Squire.js';
import { Knight } from './Knight.js';
import { Adviser } from './Adviser.js';
import { King } from './King.js';

const jB = new King('Joffrey Baratheon', 'Lanister', 14);
const jL = new Knight('Jamie Lanister', 'Lanister', 35);
const dT = new Knight('Daenerys Targaryen', 'Targaryen', 24);
const tL = new Adviser('Tyron Lanister', 'Lanister', 30);
const b = new Squire('Bron', 'Unknown', 40);

jB.yearsasking = 1;
jB.img = 'img/joffrey.jpg';

jL.weapon = 'Machete';
jL.skill = '7';
jL.img = 'img/jaime.jpg';

dT.weapon = 'Dragons';
dT.skill = 10;
dT.img = 'img/daenerys.jpg';
tL.patron = 'Daenerys Targaryen';
tL.img = 'img/tyrion.jpg';

b.patron = 'Jamie Lanister';
b.skill = 5;
b.img = 'img/bronn.jpg';

export const characters = [jB, jL, dT, tL, b];
