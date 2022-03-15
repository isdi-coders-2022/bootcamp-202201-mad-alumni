import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ContainerRobots } from './components/container-robots';
import { NewRobotForm } from './components/form-new-robots';
import { UpdateRobot } from './components/form-update-robot';
import { App } from './App';

jest.mock('./components/container-robots');
jest.mock('./components/form-new-robots');
jest.mock('./components/form-update-robot');

describe('Tests for App Router', () => {
  test('Should render page header and Home on default route', () => {
    ContainerRobots.mockImplementation(() => <div> ContainerRobots</div>);
    NewRobotForm.mockImplementation(() => <div>NewRobotForm</div>);
    UpdateRobot.mockImplementation(() => <div>UpdateRobot</div>);

    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText('ContainerRobots')).toBeInTheDocument();
  });
});
