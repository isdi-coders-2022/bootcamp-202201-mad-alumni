import { useDispatch } from 'react-redux';
import * as action from '../redux/todo/action-creators';
import * as api from '../services/api';

export function ListItem({ item }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(action.deleteTask(item, dispatch));
  };
  const handleUpdate = () => {
    const updatedTask = {
      ...item,
      isComplete: !item.isComplete,
    };
    dispatch(action.updateTask(updatedTask));
  };
  return (
    <li className="list__item">
      <input
        type="checkbox"
        checked={item.isComplete}
        name=""
        id=""
        onChange={handleUpdate}
      />

      <p className="list__item-title">{item.title}</p>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}
