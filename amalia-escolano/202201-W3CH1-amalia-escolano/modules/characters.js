import { Character } from './character.js';
import { King } from './king.js';
import { Knight } from './knight.js';
import { Advaiser } from './adviser.js';
import { Squire } from './squire.js';

const jB = new King('Joffrey', 'Baratheon', 14, 1);
const jL = new Knight('Jaime', 'Lannister', 34, 'Sword', 8);
const dT = new Knight('Daenerys', 'Targaryen', 21, 'Dragons', 6);
const tL = new Advaiser('Tyrion', 'Lannister', 40, 'Daenerys Targaryen');
const bronn = new Squire('Bronn', 'unknown', 45, 'Jaime Lannister', 10);

export const characters = [jB, jL, dT, tL, bronn];
