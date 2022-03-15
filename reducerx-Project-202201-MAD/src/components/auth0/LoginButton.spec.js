import { useAuth0 } from '@auth0/auth0-react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LoginButton } from './LoginButton';

jest.mock('@auth0/auth0-react');

const user = {
    email: 'johndoe@me.com',
    email_verified: true,
    sub: 'google-oauth2|2147627834623744883746',
};

describe('Given the LoginButton component', () => {
    beforeEach(() => {
        useAuth0.mockReturnValue({
            isAuthenticated: true,
            user,
            loginWithRedirect: jest.fn(),
        });
    });
    describe('When called', () => {
        test('It renders', () => {
            render(<LoginButton />);
            expect(screen.getByText(/Log In/)).toBeInTheDocument();
        });
    });
    describe('When clicked', () => {
        test('It calls loginWithRedirect', () => {
            render(<LoginButton />);
            const button = screen.getByRole('button');
            userEvent.click(button);
            expect(useAuth0().loginWithRedirect).toHaveBeenCalled();
        });
    });
});
