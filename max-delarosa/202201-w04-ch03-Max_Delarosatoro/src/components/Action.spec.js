import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import Action from './Action';

describe('Given the Action component', () => {
    describe('When given the correct props', () => {
        test('It renders', () => {
            const numberDisplay = ['1', '1', '1', '1', '1', '1', '1', '1', '1'];
            const displayText = 'Call';
            const toggleCall = jest.fn();
            const activeCall = false;
            render(
                <Action
                    numberDisplay={numberDisplay}
                    displayText={displayText}
                    toggleCall={toggleCall}
                    activeCall={activeCall}
                />
            );
            expect(screen.getByText('Call')).toBeInTheDocument();
            const callBtn = screen.getByRole('button');
            expect(callBtn).toBeInTheDocument();
            expect(callBtn).toHaveClass('active');
            userEvent.click(callBtn);
            expect(toggleCall).toBeCalled();
        });
    });
});
