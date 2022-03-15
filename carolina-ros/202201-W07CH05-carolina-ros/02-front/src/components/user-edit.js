import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../redux/users/action-creator";

export function UserProfileEdit({ userDB }) {
  const dispatch = useDispatch();
  const [user, setUpdateUser] = useState({
    name: userDB.name,
    age: userDB.age,
    image: userDB.image,
  });

  const handleSubmit = (ev) => {
    ev.preventDefault();
    toggleUser(user);
    console.log(user);
  };

  const toggleUser = (user) => {
    dispatch(updateUser(userDB._id, user));
  };
  function handleChange(ev) {
    setUpdateUser({
      ...userDB,
      [ev.target.name]: ev.target.value,
    });
  }

  return (
    <>
      <h2>Edit your profile</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="User name"
          value={user.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="speed"
          placeholder="Age"
          value={user.age}
          onChange={handleChange}
        />

        <input
          type="text"
          name="image"
          placeholder="User profile image"
          value={user.image}
          onChange={handleChange}
        />
        <button type="submit">Edit Profile</button>
      </form>
    </>
  );
}
