import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../redux/store';
import { NewRobotForm } from './form-new-robots';
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

describe('first', () => {
  test('should render the components NewRobotForm', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <NewRobotForm />
        </Provider>
      </BrowserRouter>
    );

    expect(screen.getByText(/Image/i)).toBeInTheDocument();
    expect(screen.getByText(/Fecha Creacion/i)).toBeInTheDocument();
    expect(screen.getByText(/Volver/i)).toBeInTheDocument();
    expect(screen.getByText(/Resistencia/i)).toBeInTheDocument();
  });
});
