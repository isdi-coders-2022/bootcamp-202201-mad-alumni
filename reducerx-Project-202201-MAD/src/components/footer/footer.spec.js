import { screen, render } from '@testing-library/react';
import { Footer } from './footer';

describe('Footer is rendered', () => {
    test('Footer renders', () => {
        render(<Footer />);

        const footerComponent = new Footer('#footer');

        expect(footerComponent).toBeDefined();

        const textElemtent = screen.getByText(
            /Shaked and mixed by ReducerX with love/i
        );
        expect(textElemtent).toBeInTheDocument();
    });
});
