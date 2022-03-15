import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../redux/store';
import { ContainerRobots } from './container-robots';
import { Provider } from 'react-redux';

const objRobots = {
  _id: '621b677b9cef074b5659c21f',
  name: 'jesus',
  speed: 2222,
  resistance: 22323,
  creation_date: '0222-02-22T00:00:00.000Z',
  image: 'https://www.zonaoutdoor.es/sites/default/files/ubtech_alpha_1p.jpg',
  __v: 0,
};

describe('we check that we load the component ContainerRobots', () => {
  test('should render the components in Home', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <ContainerRobots />
        </Provider>
      </BrowserRouter>
    );
    expect(screen.getByText(/Challenge Robots/i)).toBeInTheDocument();
    expect(screen.getByText(/Add Robot/i)).toBeInTheDocument();
  });
});
