import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllUsers } from "../services/api";
import { loadUsers } from "../redux/members/action-creators-members";
import * as actions from "../redux/userLog/action-creators.js";
import { LogIn } from "./login.js";
import { Register } from "./register";
import { UserList } from "./userList";

export function MainPage({ setLoginState, loginState }) {
  const dispatch = useDispatch();

  useEffect(() => {
    getAllUsers().then((resp) => {
      console.log(resp);
      dispatch(loadUsers(resp.data));
    });
  }, [dispatch]);

  useEffect(() => {
    console.log(loginState, " estado del login");
  }, [loginState]);

  const user = useSelector((state) => state.user);
  console.log(user.isLogged, user.userName);

  const handleClick = (ev) => {
    ev.preventDefault();

    dispatch(
      actions.logout({
        isLogged: false,
        userName: user.userName,
      })
    );
    console.log("Logout succesful! ", user.isLogged);
  };

  return (
    <>
      <header>
        <h1>
          Social web
          {user.isLogged && <span> de {user.userName}</span>}
        </h1>
      </header>

      <div>
        {user.isLogged !== true ? (
          <>
            <p>Please, log in to see your profile</p>
            <LogIn />
            <p>Or register a new user</p>
            <Register />
          </>
        ) : (
          <>
            <div>
              {user.userName}
              <button
                type="button"
                alt="logout"
                name="logoutButton"
                onClick={handleClick}
              >
                LogOut
              </button>
            </div>
            <UserList />
          </>
        )}
      </div>

      {/* {users.length ? (
        <>
          <h2>Lista de users</h2>
          <ul className="task-list">
            {users.map((user) => (
              <>
                <Link to={`/user/${user._id}`}>
                  <p key={user._id}>{user.name}</p>
                </Link>

                <img src={`${user.image}`} alt="User" />
              </>
            ))}
          </ul>
        </>
      ) : ( */}
      {/* )} */}
    </>
  );
}
