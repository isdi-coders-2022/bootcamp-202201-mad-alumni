import { actionTypes } from './actionTypes';

export const loadTasks = (taskList) => ({
    type: actionTypes.load,
    payload: taskList,
});

export const addTask = (task) => ({
    type: actionTypes.add,
    payload: task,
});

export const toggleTask = (task) => ({
    type: actionTypes.toggle,
    payload: task,
});

// export const updateTask = (id, task) => ({
//     type: actionTypes.update,
//     payload: {
//         id,
//         task,
//     },
// });

export const removeTask = (id) => ({
    type: actionTypes.remove,
    payload: id,
});
