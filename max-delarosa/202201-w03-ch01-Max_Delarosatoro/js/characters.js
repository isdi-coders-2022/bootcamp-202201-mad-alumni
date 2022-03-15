import { Advisor } from './Advisor.js';
import { King } from './King.js';
import { Knight } from './Knight.js';
import { Squire } from './Squire.js';

const joffreyBaratheon = new King('Joffrey', 'Baratheon', 15, 1);
const jamieLannister = new Knight('Jamie', 'Lannister', 30, 'Sword', 8);
const daenerysTargaryen = new Knight('Daenerys', 'Targaryen', 26, 'Dragon', 4);
const tyrionLannister = new Advisor(
    'Tyrion',
    'Lannister',
    26,
    daenerysTargaryen
);
const bronn = new Squire('Bronn', 'Unknown', 35, jamieLannister, 7);

export const characters = [
    joffreyBaratheon,
    jamieLannister,
    daenerysTargaryen,
    tyrionLannister,
    bronn,
];
