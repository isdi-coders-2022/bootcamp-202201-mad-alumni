import { useContext } from 'react';
import { GlobalContext } from '../../context/globalContext';

export default function Task({ task }) {
    const { toggleTask, removeTask } = useContext(GlobalContext);

    const handleCheckbox = () => {
        toggleTask(task);
    };

    const handleClick = (e) => {
        removeTask(parseInt(e.target.dataset.id, 10));
    };

    return (
        <div key={task.id} className="card">
            <p>Title: {task.title}</p>
            <p>Responsible: {task.responsible}</p>
            <p>Completed: {task.isCompleted ? 'yes' : 'no'}</p>
            <input
                onChange={handleCheckbox}
                type="checkbox"
                checked={task.isCompleted}
                data-testid="checkbox"
            />

            <button
                className="card__delete-btn"
                data-id={task.id}
                type="button"
                onClick={handleClick}
            >
                Delete
            </button>
        </div>
    );
}
