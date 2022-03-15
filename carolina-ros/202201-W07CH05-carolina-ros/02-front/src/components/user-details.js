import { useState } from "react";
import { useDispatch } from "react-redux";
import { UserProfileEdit } from "./user-edit";
// import { removeUser } from "../redux/users/action-creator";

export function User({ user }) {
  const dispatch = useDispatch();

  const [editUser, setEditUser] = useState(false);

  //   const deleteRobot = (robot) => {
  //     dispatch(removeUser(robot._id));
  //   };

  //   function handleClick() {
  //     deleteRobot(robot);
  //   }

  function handleClickUpdate() {
    setEditUser(true);
  }

  return (
    <li>
      <h3>{user.name} </h3>
      <img src={`${user.image}`} alt="disney-robot"></img>
      <p>{user.age} </p>
      ❤️ : <p>{user.friends} </p>
      ⚔️: <p>{user.enemies} </p>
      {/* <div
        role="button"
        tabIndex={0}
        onClick={handleClick}
        onKeyPress={handleClick}
      >
        🗑️
      </div> */}
      <button onClick={handleClickUpdate} type="submit">
        Update Profile
      </button>
      {editUser && <UserProfileEdit userDB={user} />}
    </li>
  );
}
