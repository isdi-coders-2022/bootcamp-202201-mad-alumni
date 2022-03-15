import { Header } from '../components/Header.js';

test('Header renders', () => {
    document.body.innerHTML = '<header id="header"></header>';

    new Header();
    const logo = document.querySelector('.header__logo');
    expect(logo).toBeDefined();

    const nav = document.querySelector('.header__nav');
    expect(nav).toBeDefined();
});
