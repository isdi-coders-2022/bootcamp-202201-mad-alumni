import { Header } from './header.js';
import { screen } from '@testing-library/dom';
import { userEvent } from '@testing-library/user-event';

test('Header renders', () => {
    document.body.innerHTML = "<div id ='header'></div>";

    const headerComponent = new Header('#header');

    expect(headerComponent).toBeDefined();

    expect(screen.getByText(/Tour/i)).toBeTruthy();
});
