import { render, screen } from '@testing-library/react';

import Hamburger from 'hamburger-react';
import { Header } from './header';
import { Menu } from './menu';
import { LoginButton } from '../auth0/LoginButton';

describe('Given the component function Header', () => {
    describe('When calling the Header function', () => {
        test('An image should be rendererd', () => {
            render(<Header />);
            const headerImageAlt = screen.getByAltText('Neon cocktail logo');
            expect(headerImageAlt).toBeInTheDocument();
        });
        test('The desktop menu should be rendered', () => {
            render(<Header />);
            const template = <Menu />;
            expect(template).toBeDefined();
        });
        test('The login button should appear', () => {
            render(<Header />);
            const template = <LoginButton />;
            expect(template).toBeDefined();
        });
        test('The hamburger menu icon should appear', () => {
            render(<Header />);
            const template = <Hamburger />;
            expect(template).toBeDefined();
        });
    });
});
