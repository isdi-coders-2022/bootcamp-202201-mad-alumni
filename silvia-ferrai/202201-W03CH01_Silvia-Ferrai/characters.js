import { Adviser } from './adviser.js';
import { King } from './king.js';
import { Knight } from './knight.js';
import { Squire } from './squire.js';

const jB = new King('Joffrey ', 'Baratheon', 16);
const jL = new Knight('Jaime', ' Lannister', 30, 'sword', 10);
const dT = new Knight('Daenerys', 'Targarian', 26, 'Dragons', 10);
const tL = new Adviser('Tyrion', ' Lannister', 28, 'Daenerys Targarian');
const b = new Squire('Bronn', '-unknow-', 35, 'Tyrion Lannister', 8);

jB.img = 'img/joffrey.jpg';
jL.img = './img/jaime.jpg';
dT.img = './img/daenerys.jpg';
tL.img = './img/tyrion.jpg';
b.img = './img/bronn.jpg';
export const characters = [jB, jL, dT, tL, b];
