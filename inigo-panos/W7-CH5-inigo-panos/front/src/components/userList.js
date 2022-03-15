import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllUsers } from "../services/api";
import { loadUsers } from "../redux/members/action-creators-members";

export function UserList() {
  const members = useSelector((state) => state.members);
  const dispatch = useDispatch();

  //   useEffect(() => {
  //     getAllUsers().then((resp) => {
  //       console.log(resp);
  //       dispatch(loadUsers(resp.data));
  //       console.log(resp.data);
  //     });
  //   }, [dispatch]);

  useEffect(() => {
    getAllUsers().then((resp) => {
      console.log("pepe");
      console.log(resp.data);
      dispatch(loadUsers(resp.data));
    });
  }, [dispatch]);
  console.log(members, "miembros");

  return (
    <>
      <header>
        <h1>List of users</h1>
      </header>

      {members.length ? (
        <>
          <h2>Lista de users</h2>
          <ul className="task-list">
            {members.map((user) => (
              <>
                <p key={user._id}>{user.userName}</p>

                <img
                  className="profile"
                  src={`${user.profileImage}`}
                  alt="User"
                />
              </>
            ))}
          </ul>
        </>
      ) : (
        <p>No hay usuarios</p>
      )}
    </>
  );
}
