/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { GlobalContext } from '../../context/globalContext';
import { TaskStructure } from '../../models/Task';
import Task from '../Task/Task';
import './TaskList.scss';

export function TaskList() {
    const [formState, setFormState] = useState({
        title: '',
        responsible: '',
    });
    const taskList = useSelector((state) => state.taskList);
    const { addTask } = useContext(GlobalContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(new TaskStructure(formState.title, formState.responsible));
    };

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title:</label>
                <input
                    name="title"
                    onChange={handleChange}
                    id="title"
                    type="text"
                    placeholder="title"
                    value={formState.title}
                />
                <label htmlFor="title">Responsible:</label>
                <input
                    name="responsible"
                    onChange={handleChange}
                    id="responsible"
                    placeholder="responsible"
                    type="text"
                    value={formState.responsible}
                />
                <button data-testid="submit-btn" type="submit">
                    Submit
                </button>
            </form>
            {taskList.map((item) => (
                <Task task={item} />
            ))}
        </div>
    );
}
