import { MyHeroes } from './MyHeroes';
import { heroes } from '../js/mock-heroes.js';

test('MyHeroes renders', () => {
    document.body.innerHTML = `<div id="my-heroes"></div>`;

    const myHeroesComponent = new MyHeroes();

    expect(myHeroesComponent).toBeDefined();

    const heroesDOM = document.querySelectorAll(
        '.my-heroes__hero-outside-container'
    );

    expect(heroesDOM).toHaveLength(heroes.length);
});
