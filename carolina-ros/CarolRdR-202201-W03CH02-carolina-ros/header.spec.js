import { Header } from './components/header.js';
import { screen } from '@testing-library/dom';
test('Header renders', () => {
    document.body.innerHTML = "<div id='header'></div>";
    const headerComponent = new Header('#header');
    expect(headerComponent).toBeDefined();
    expect(screen.findByText(/Tour/i)).toBeTruthy();
});
