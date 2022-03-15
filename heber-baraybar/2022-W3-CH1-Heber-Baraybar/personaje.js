import { Adviser } from './advisor.js';

import { Knight } from './knight.js';
import { King } from './king.js';
import { Squire } from './squire.js';
import { Character } from './character.js';

const jB = new King('Joffrey', 'Baratheon');
const jL = new Knight('Jaime', 'Lannister');
const dT = new Knight('Daenerys', 'Targaryen');
const tL = new Adviser('Tyrion', 'Lannister');
tL.patron = dT;
const b = new Squire('Bronn');

jB.imagen = './images/joffrey.jpg';
jB.kingYears = 2;
b.imagen = './images/bronn.jpg';
b.age = 47;
b.patron = jL;

jL.imagen = './images/jaime.jpg';
jL.age = 19;
jL.bravery = 'Fast runnner';
jL.message = 'Soy el mas fuerte';
jL.weapons = 'Sword';
jL.age = 39;

dT.imagen = './images/daenerys.jpg';
dT.age = 25;
dT.bravery = 'Capoeira, reiki';
dT.message = 'Too pretty to fight';
dT.weapons = 'Credit card';

tL.imagen = './images/tyrion.jpg';
tL.age = 33;
tL.patron = 'Daenerys, Targaryen';
tL.message = 'No se porque';

export const personajes = [jB, jL, dT, tL, b];
