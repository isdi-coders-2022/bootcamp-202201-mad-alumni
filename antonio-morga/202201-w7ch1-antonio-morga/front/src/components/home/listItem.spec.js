import { screen } from '@testing-library/react';
import { render } from '../../utils/test-utils';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { ListItem } from './listItem';

const mockRobotObject = {
  _id: '621a888a9aa010cd18c8',
  robotName: 'Jhonny Slow',
  speed: 3,
  strength: 6,
  creationDate: '2022-02-27',
  img: 'http://2.bp.blogspot.com/-ZSLoGzsbc1w/VTk4ekj2JYI/AAAAAAAAAYQ/kq9NHWaF8-Y/s1600/rrobot%2Bc.gif',
  __v: 0,
};

describe('Given the compoent ListItem', () => {
  describe('When rendering it with an initial state', () => {
    test('It should be displayed', () => {
      const preloadedState = [];
      render(
        <MemoryRouter>
          <Routes>
            <Route path="/" element={<ListItem item={mockRobotObject} />} />
          </Routes>
        </MemoryRouter>,
        { preloadedState }
      );
      expect(screen.getByText(/Jhonny Slow/i)).toBeTruthy();
    });
    // test('If the delete button is clicked, the dispatch function should be called', () => {
    //   const dispatch = jest.fn();
    //   const preloadedState = [];
    //   render(
    //     <MemoryRouter>
    //       <Routes>
    //         <Route path="/" element={<ListItem item={mockRobotObject} />} />
    //       </Routes>
    //     </MemoryRouter>,
    //     { preloadedState }
    //   );
    //   userEvent.click(screen.getByText(/delete/i));
    //   expect(dispatch).toHaveBeenCalled();
    // });
  });
});
