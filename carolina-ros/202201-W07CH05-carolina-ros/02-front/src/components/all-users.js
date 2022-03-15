import { User } from "./user-details";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadUsers } from "../redux/users/action-creator";
import { getAll } from "../services/api";
// import { Login } from "./user-login";
// import { Register } from "./user-registration";
import { LoginLogout } from "./user-form";

export function AllUsers() {
  const usersState = useSelector((state) => state.users);
  console.log({ usersState });
  const dispatch = useDispatch();

  useEffect(() => {
    getAll().then((resp) => {
      dispatch(loadUsers(resp.data));
    });
  }, [dispatch]);

  return (
    <>
      <LoginLogout />

      {/* <AddRobot /> */}
      {usersState ? (
        <>
          <h2>Users Profiles</h2>
          <ul className="users-list">
            {usersState.map((user) => (
              <User user={user} key={user.id} />
            ))}
          </ul>
        </>
      ) : (
        "Loading"
      )}
    </>
  );
}
