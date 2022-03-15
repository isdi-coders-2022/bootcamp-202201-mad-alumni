import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../redux/tasks/actionCreators';
import * as service from '../services/apiRequest';

export const useTasks = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        service.loadTasks().then((data) => {
            dispatch(actions.loadTasks(data.data));
        });
    }, []);

    const addTask = (task) => {
        service.addTask(task).then((data) => {
            dispatch(actions.addTask(data.data));
        });
    };

    const toggleTask = (task) => {
        const newTaskState = { isCompleted: !task.isCompleted };
        service.toggleTask(task.id, newTaskState).then((data) => {
            dispatch(actions.toggleTask(data.data));
        });
    };

    const removeTask = (id) => {
        service.removeTask(id).then((data) => {
            dispatch(actions.removeTask(id));
        });
    };

    return {
        addTask,
        toggleTask,
        removeTask,
    };
};
