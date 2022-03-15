import { Hero } from './Hero';
import userEvent from '@testing-library/user-event';

test('Hero renders', () => {
    document.body.innerHTML = `<div id="hero"></div>`;

    const HeroSearchComponent = new Hero();
    const initialArrayLength = HeroSearchComponent.heroes.length;
    console.log(initialArrayLength);

    expect(HeroSearchComponent).toBeDefined();

    let heroTitleDOM = document.querySelector('.hero__title');
    expect(heroTitleDOM.textContent).toEqual('DR NICE Details');

    const inputDOM = document.querySelector('.hero__input');
    userEvent.click(inputDOM);

    const saveButton = document.querySelector('.hero__button--save');

    for (let i = 0; i < 15; i++) {
        userEvent.keyboard('[Delete]');
        userEvent.keyboard('[Backspace]');
    }

    heroTitleDOM = document.querySelector('.hero__title');

    userEvent.keyboard('Test Hero');
    userEvent.click(saveButton);

    heroTitleDOM = document.querySelector('.hero__title');
    expect(heroTitleDOM.textContent).toEqual('TEST HERO Details');
});
