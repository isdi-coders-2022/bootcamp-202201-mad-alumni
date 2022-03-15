import { Character } from './Character.js';

export class Squire extends Character {
    constructor(name, family, age, knightBeingAssessed, servePoints) {
        super(name, family, age);
        this.knightBeingAssessed = knightBeingAssessed;
        this.servePoints = servePoints;
    }
    phrase = 'I am a loser';
}
