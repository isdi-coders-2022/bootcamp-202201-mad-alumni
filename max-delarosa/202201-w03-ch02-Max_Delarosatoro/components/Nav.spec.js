import { screen } from '@testing-library/dom';
import { Nav } from './Nav';

test('Nav renders', () => {
    document.body.innerHTML = '<div id="header__nav"></div>';

    const navOptions = [
        { path: '/index.html', label: 'Dashboard' },
        { path: '/pages/heroes.html', label: 'Heroes' },
    ];

    const navComponent = new Nav(navOptions);

    expect(navComponent).toBeDefined();

    expect(screen.getByText(/dashboard/i));
    expect(screen.getByText(/heroes/i));
});
