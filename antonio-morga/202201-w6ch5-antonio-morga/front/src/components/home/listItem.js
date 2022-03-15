import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as action from '../../redux/robots/action-creators';

export function ListItem({ item }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(action.deleteRobot(item));
  };

  return (
    <li className="list__item">
      <img className="list__item-image" src={item.img} alt="robot" />
      <Link to={`/details/${item._id}`}>
        <h2 className="list__item-title">{item.robotName}</h2>
      </Link>
      <p>Power index: {+item.speed + +item.strength}</p>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}
