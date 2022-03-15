import { useSelector, useDispatch } from 'react-redux';
import * as action from '../../redux/robots/action-creators';
import { useEffect } from 'react';
import { ListItem } from './listItem';

export function List() {
  const listState = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(action.loadRobots(dispatch));
  }, [dispatch]);

  return (
    <ul className="list">
      {listState.map((item) => (
        <ListItem key={item._id} item={item} />
      ))}
    </ul>
  );
}
