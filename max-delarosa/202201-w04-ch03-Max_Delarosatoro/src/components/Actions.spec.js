import { render, screen } from '@testing-library/react';
import Actions from './Actions';

describe('Given the Actions component', () => {
    describe('When given the correct props', () => {
        test('It renders', () => {
            const numberDisplay = ['1', '1', '1', '1', '1', '1', '1', '1', '1'];
            const startCall = jest.fn();
            const hangCall = jest.fn();
            render(
                <Actions
                    numberDisplay={numberDisplay}
                    startCall={startCall}
                    hangCall={hangCall}
                    activeCall={false}
                />
            );
            expect(screen.getByText(/111111111/)).toBeInTheDocument();
            expect(screen.getByText(/Call/)).toBeInTheDocument();
        });
    });
});
