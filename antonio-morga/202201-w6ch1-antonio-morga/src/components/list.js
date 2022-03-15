import { useSelector, useDispatch } from 'react-redux';
import * as api from '../services/api';
import * as action from '../redux/todo/action-creators';
import { useEffect } from 'react';
import { ListItem } from './listItem';

export function List() {
  const listState = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(action.loadTasks(dispatch));
  }, [dispatch]);

  return (
    <ul className="list">
      {listState.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  );
}
