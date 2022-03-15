import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

describe('Given the Button component', () => {
    describe('When called to render', () => {
        test('It should render', () => {
            const { container } = render(<Button />);
            const icon = container.querySelector('i');
            expect(icon).toBeDefined();
        });
        test('It should call handleClick when clicked', () => {
            const handleClickMock = jest.fn();
            const { container } = render(
                <Button className="test" handleClick={handleClickMock} />
            );
            const div = container.querySelector('div');
            userEvent.click(div);
            expect(handleClickMock).toBeCalled();
        });
    });
});
