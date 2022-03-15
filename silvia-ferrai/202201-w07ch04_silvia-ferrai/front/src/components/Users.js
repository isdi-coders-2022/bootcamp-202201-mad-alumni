export function Users({ userMember }) {
  console.log(userMember);

  return (
    <>
      <p>Name: {userMember.name}</p>
      <img src={`${userMember.image}`} alt="pic" />
      <p>Sex: {userMember.sex}</p>
      <p>Enemy {userMember.enemy} </p>
      <p>Friend {userMember.friend} </p>
    </>
  );
}
