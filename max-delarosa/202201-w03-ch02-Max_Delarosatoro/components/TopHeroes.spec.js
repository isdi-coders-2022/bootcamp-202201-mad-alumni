import { TopHeroes } from './TopHeroes';

test('TopHeroes renders', () => {
    document.body.innerHTML = `<div id="top-heroes"></div>`;

    const topHeroesComponent = new TopHeroes();

    expect(topHeroesComponent).toBeDefined();
});
