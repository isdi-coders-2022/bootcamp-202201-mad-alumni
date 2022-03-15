import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../redux/store';
import { RobotDetails } from './robot-details';
import { Provider } from 'react-redux';
// import * as api from '../services/apiRobot';

const objRobots = {
  _id: '621b677b9cef074b5659c21f',
  name: 'jesus',
  speed: 2222,
  resistance: 22323,
  creation_date: '0222-02-22T00:00:00.000Z',
  image: 'https://www.zonaoutdoor.es/sites/default/files/ubtech_alpha_1p.jpg',
  __v: 0,
};

// jest.mock('../services/apiRobot');

describe('first', () => {
  // api.removeRobot.mockResolvedValue({});
  test('should render the components in Home', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <RobotDetails robot={objRobots} />
        </Provider>
      </BrowserRouter>
    );
    expect(screen.getByText(/jesus/i)).toBeInTheDocument();
    expect(screen.getByText(/2222/i)).toBeInTheDocument();
    expect(screen.getByText(/22323/i)).toBeInTheDocument();
    expect(screen.getByText(/0222-02-22T00:00:00.000Z/i)).toBeInTheDocument();
    // const deleteBtn = screen.getByTestId('custom-element');
    // userEvent.click(deleteBtn);
    // expect(api.removeRobot).toHaveBeenCalledTimes(1);
  });
});
