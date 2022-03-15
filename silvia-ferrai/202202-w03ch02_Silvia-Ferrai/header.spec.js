// import { Header } from './components/header.js';
// import { screen } from '@testing-library/dom';

// test('Header renders', () => {
//     document.body.innerHTML = "<div id='header'></div>";
//     const headerDocument = new Header('#header');
//     expect(headerDocument).toBeDefined();
//     expect(screen.getByText(/Hello World/i)).toBeTruthy();
// });

// //

// import { TaskList } from './components/....js';

// test('Tasklist render a list from given array', () => {
//     document.body.innerHTML = "<div id='list'></div>";
//     const mockTasks = ['test 1', 'test 2', 'test 3'];

//     const taskListComponent = new TaskList('#list', mockTasks);

//     expect(taskListComponent).toBeDefined();
//     expect(screen.getByText(/text 1/i)).toBeTruthy();
//     expect(screen.getByText(/text 2/i)).toBeTruthy();
//     expect(screen.getByText(/text 3/i)).toBeTruthy();
// });

// //

// test('When form is submited a new task is added to given tasklist', () => {
//     document.body.innerHTML = "<div id='form'></div>";
//     const mockTasks = ['test 1', 'test 2', 'test 3'];

//     const taskListComponent = new TaskList('#list', mockTasks);
//     const formComponent = new Form('#form', taskListComponent);

//     userEvent.click(screen.getByLabelText('Enter new todo'));
//     userEvent.keyboard('Nueva tarea de prueba');
//     userEvent.click(screen.getByRole('button', /Add todo/i));

//     expect(screen.getByText('Nueva tarea de prueba'));
//     expect(screen.queryAllByRole('listitem')).toHaveLength(4);
// });
