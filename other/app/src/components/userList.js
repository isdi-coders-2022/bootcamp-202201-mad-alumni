import { useSelector } from "react-redux";

export function Profile() {
  const user = useSelector((state) => state.user);

  return (
    <div>
      <div className="container">
        <img src={user.profileImg} alt="none" />
        <img src={user.backImg} alt="none" />
        <span>{user.userName}</span>
        <span>{user.profileText}</span>
      </div>
    </div>
  );
}
