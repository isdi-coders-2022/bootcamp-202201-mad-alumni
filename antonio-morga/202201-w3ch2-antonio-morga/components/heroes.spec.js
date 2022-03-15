import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { Heroes } from './heroes.js';
import { HEROES } from '../heroesMock.js';

describe('Given the class Heroes', () => {
    describe('When passing the array HEROES', () => {
        test('Then it should render: ', () => {
            document.body.innerHTML = `<div id="heroes"></div>`;

            new Heroes(HEROES);

            expect(screen.getByText(/heroes/i)).toBeTruthy();
            expect(screen.getByText(/celeritas/i)).toBeTruthy();
            expect(screen.getByText(/dr iq/i)).toBeTruthy();
        });
    });
    describe('When the user types a Pepito and presses the add button', () => {
        test('Then it should render', () => {
            document.body.innerHTML = `<div id="heroes"></div>`;

            new Heroes(HEROES);

            userEvent.type(screen.getByRole('textbox'), 'Pepito');
            userEvent.click(screen.getByText(/add/i));
            expect(screen.getByText(/pepito/i)).toBeTruthy();

            const deleteButtons = screen.getAllByText(/x/i);
            userEvent.click(deleteButtons[deleteButtons.length - 1]);

            expect(screen.queryByText(/pepito/i)).toBe(null);
        });
    });
});
