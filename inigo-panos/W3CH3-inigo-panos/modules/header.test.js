import { screen } from '@testing-library/dom';
import { HeaderHero } from './header.js';

test('Header renders correctly', () => {
    document.body.innerHTML = "<div id='header'></div>";

    const headerComponent = new HeaderHero('#header');

    expect(headerComponent).toBeDefined();

    expect(screen.getByText(/Tour of Heroes/i)).toBeTruthy();
});
