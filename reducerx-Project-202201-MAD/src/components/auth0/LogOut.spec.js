import { useAuth0 } from '@auth0/auth0-react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LogoutButton } from './LogOut';

jest.mock('@auth0/auth0-react');

const user = {
    email: 'johndoe@me.com',
    email_verified: true,
    sub: 'google-oauth2|2147627834623744883746',
};

describe('Given the component', () => {
    beforeEach(() => {
        useAuth0.mockReturnValue({
            isAuthenticated: true,
            user,
            logout: jest.fn(),
            loginWithRedirect: jest.fn(),
        });
    });
    describe('When called', () => {
        test('It renders', () => {
            render(<LogoutButton />);
            expect(screen.getByText(/Log Out/)).toBeInTheDocument();
        });
    });
    describe('When clicked', () => {
        test('It calls loginWithRedirect', () => {
            render(<LogoutButton />);
            const button = screen.getByRole('button');
            userEvent.click(button);
            expect(useAuth0().logout).toHaveBeenCalled();
        });
    });
});
