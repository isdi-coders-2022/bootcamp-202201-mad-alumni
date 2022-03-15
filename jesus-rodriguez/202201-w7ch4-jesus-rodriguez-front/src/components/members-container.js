import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import * as api from '../services/apiMembers.js';
import * as action from '../redux/members/action-creator.js';
import { MemberDetails } from './member-details.js';

import { UserButtons } from './user-buttom.js';

export function ContainerMembers() {
  const members = useSelector((state) => state.members);
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();
  useEffect(() => {
    api.getAllUsers(user.token).then((resp) => {
      console.log(resp.data);
      dispatch(action.load(resp.data));
    });
  }, [dispatch, user.token]);

  return (
    <>
      <h1 className="title"> Challenge Social Media</h1>
      <h2 className="title"> Welcome {user.userName}</h2>
      {members.length ? (
        <>
          <div className="container-members">
            {members.map((member) => (
              <MemberDetails member={member} key={member._id} />
            ))}
          </div>
        </>
      ) : (
        <p>There are no members</p>
      )}
      <div className="add-button-container"></div>
    </>
  );
}
