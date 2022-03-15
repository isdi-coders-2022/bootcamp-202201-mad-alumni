import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { CocktailList } from './components/cocktail-list/cocktail-list';

jest.mock('./components/header/header');
jest.mock('./components/details/details');
jest.mock('./components/footer/footer');
jest.mock('./components/cocktail-list/cocktail-list');

describe('Test for App Router', () => {
    test('renders Header and Cocktail List on default route', () => {
        Header.mockImplementation(() => <div>PageHeaderMock</div>);
        CocktailList.mockImplementation(() => <div>PageCocktailMock</div>);
        Footer.mockImplementation(() => <div>PageFooterMock</div>);
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        );
        expect(screen.getByText('PageHeaderMock')).toBeInTheDocument();
        expect(screen.getByText('PageFooterMock')).toBeInTheDocument();
        expect(screen.getByText('PageCocktailMock')).toBeInTheDocument();
    });

    // console.log(prettyDOM());

    // const linkElement = screen.getByText(
    //     /Shaked and mixed by ReducerX with love/i
    // );

    // expect(linkElement).toBeInTheDocument();
});
