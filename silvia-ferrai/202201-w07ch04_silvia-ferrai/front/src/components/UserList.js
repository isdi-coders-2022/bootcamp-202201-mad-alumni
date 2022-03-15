import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUsers } from "../redux/user.redux/action.creators";
import { Users } from "./Users";

export function UserList() {
  const usersMembers = useSelector((state) => state.usersMembers);
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsers(user.token));
  }, [dispatch, user.token]);

  return (
    <>
      {usersMembers ? (
        <>
          <h2>Lista de usuarios</h2>
          {usersMembers.map((userMember) => (
            <Users userMember={userMember} key={userMember._id} />
          ))}
        </>
      ) : (
        ""
      )}
    </>
  );
}
