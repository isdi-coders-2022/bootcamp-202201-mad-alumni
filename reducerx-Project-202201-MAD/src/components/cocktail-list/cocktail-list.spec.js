/* eslint-disable testing-library/await-async-query */
import { render, screen, fireEvent, userEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { useState as useStateMock } from 'react';
import { Context } from '../../context/context';
import { CocktailList } from './cocktail-list';

const state = {
    store: {
        cocktails: [
            {
                id: '15346',
                idDrink: '15346',
                strDrink: '155 Belmont',
            },
        ],
    },
};
const mockCocktailPhoto = {
    store: {
        cocktails: [
            {
                id: '15346',
                idDrink: '15346',
                strDrink: '155 Belmont',
                alt_description: 'Cocktail',
            },
        ],
    },
};
const mockPrevNext = {
    store: {
        cocktails: [
            {
                id: '15346',
                idDrink: '15346',
            },
            {
                id: '15347',
                idDrink: '15347',
            },
            {
                id: '15348',
                idDrink: '15348',
            },
            {
                id: '15349',
                idDrink: '15349',
            },
            {
                id: '15350',
                idDrink: '15350',
            },
            {
                id: '15351',
                idDrink: '15351',
            },
            {
                id: '15352',
                idDrink: '15352',
            },
            {
                id: '15353',
                idDrink: '15353',
            },
            {
                id: '15354',
                idDrink: '15354',
            },
            {
                id: '15355',
                idDrink: '15355',
            },
            {
                id: '15356',
                idDrink: '15356',
            },
            {
                id: '15357',
                idDrink: '15357',
            },
        ],
    },
    loadCocktails: jest.fn({
        store: {
            cocktails: [
                {
                    id: '15346',
                    idDrink: '15346',
                },
                {
                    id: '15347',
                    idDrink: '15347',
                },
                {
                    id: '15348',
                    idDrink: '15348',
                },
            ],
        },
    }),
};

function Button({ onClick, children }) {
    return (
        <button type="button" onClick={onClick}>
            {children}
        </button>
    );
}

describe('first', () => {
    test('should first', () => {
        render(
            <BrowserRouter>
                <Context.Provider value={state}>
                    <CocktailList />
                </Context.Provider>
            </BrowserRouter>
        );
        expect(screen.getAllByText(/155 Belmont/)).toHaveLength(2);
    });
});
describe('Given CocktailList component', () => {
    describe('When passed a cocktail obj', () => {
        test('It should render', () => {
            render(
                <BrowserRouter>
                    <Context.Provider value={mockCocktailPhoto}>
                        <CocktailList />
                    </Context.Provider>
                </BrowserRouter>
            );
            expect(screen.getByAltText(/Cocktail/)).toBeInTheDocument();
        });
    });
});

describe('Given CocktailList', () => {
    test('display state', () => {
        render(
            <BrowserRouter>
                <Context.Provider value={mockPrevNext}>
                    <CocktailList />
                </Context.Provider>
            </BrowserRouter>
        );
        expect(screen.getByTestId('btn-next')).toHaveBeenCalledTimes(0);
    });
});
describe('Given CocktailList buttons Next and Previous', () => {
    test('CocktailList Loading message should be rendered', () => {
        expect(screen.findByText(/Loading/)).toBeDefined();
    });
});

describe('When pressing the Next button', () => {
    test('Then the function loadCocktail should be called', () => {
        render(
            <Context.Provider value={mockPrevNext}>
                <BrowserRouter>
                    <CocktailList />
                </BrowserRouter>
            </Context.Provider>
        );

        fireEvent.click(screen.getByText(/Next/i));
        expect(mockPrevNext.loadCocktails).toHaveBeenCalledTimes(1);
    });
});
describe('When pressing the Previous button', () => {
    test('Then the function loadCocktail should be called', () => {
        render(
            <Context.Provider value={mockPrevNext}>
                <BrowserRouter>
                    <CocktailList />
                </BrowserRouter>
            </Context.Provider>
        );

        fireEvent.click(screen.getByText(/Previous/i));
        expect(mockPrevNext.loadCocktails).toHaveBeenCalledTimes(1);
    });
});

describe('When pressing Next', () => {
    test('calls onClick Next when clicked', () => {
        const handleClickNext = jest.fn();
        render(<Button onClick={handleClickNext}>Next</Button>);
        fireEvent.click(screen.getByText(/Next/i));
        expect(handleClickNext).toHaveBeenCalledTimes(1);
    });
});

describe('When pressing Previous', () => {
    test('calls onClick Next when clicked', () => {
        const handleClickNext = jest.fn();
        render(<Button onClick={handleClickNext}>Previous</Button>);
        fireEvent.click(screen.getByText(/Previous/i));
        expect(handleClickNext).toHaveBeenCalledTimes(1);
    });
});
