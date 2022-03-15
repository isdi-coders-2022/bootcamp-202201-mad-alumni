import { prettyDOM, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '../../utils/test-utils';
import { Home } from './Home';
import * as services from '../../services/apiRequest';

jest.mock('../../services/apiRequest');

describe('Given the Home component', () => {
    beforeEach(() => {
        services.getAllRobots.mockResolvedValue({
            data: [
                {
                    id_: 1,
                    name: 'testName',
                    image: 'testImage',
                    characteristics: {
                        speed: 9999,
                        resistance: 9998,
                        created_at: 41324123,
                    },
                },
            ],
        });
    });
    describe('When called', () => {
        test('It renders', async () => {
            await render(
                <BrowserRouter>
                    <Home />
                </BrowserRouter>
            );

            expect(screen.getByText(/Add Robot/)).toBeInTheDocument();
            expect(screen.getByText(/testName/)).toBeInTheDocument();
            expect(screen.getByText(/9999/)).toBeInTheDocument();
            expect(screen.getByText(/9998/)).toBeInTheDocument();
            expect(screen.getByText(/41324123/)).toBeInTheDocument();
        });
    });
});
