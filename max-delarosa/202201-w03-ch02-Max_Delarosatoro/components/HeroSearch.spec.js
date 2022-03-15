import { HeroSearch } from './HeroSearch';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/dom';

test('HeroSearch renders', () => {
    document.body.innerHTML = `<div id="hero-search"></div><div id="search-result"></div>`;

    const myHeroeSearchComponent = new HeroSearch();

    expect(myHeroeSearchComponent).toBeDefined();

    userEvent.click(screen.queryByRole('textbox'));
    userEvent.keyboard('narco');
    userEvent.keyboard('{Enter}');
    const linkDOM = document.querySelector('.search-result--link');
    expect(linkDOM).toBeDefined();
});
