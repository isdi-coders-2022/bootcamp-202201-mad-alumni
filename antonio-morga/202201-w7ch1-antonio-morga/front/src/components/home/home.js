import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as action from '../../redux/robots/action-creators';
import * as userAction from '../../redux/user/action-creators';
import { Link } from 'react-router-dom';
import { Form } from './form';
import { List } from './list';

export function Home() {
  const userState = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userAction.login());
    dispatch(action.loadRobots(userState.authKey));
  }, [dispatch, userState.authKey, userState.logged]);

  return (
    <>
      {userState.logged ? (
        <>
          <Form /> <List />
        </>
      ) : (
        <Link to={`/login`}>
          <h2>Login to access robots!</h2>
        </Link>
      )}
    </>
  );
}
