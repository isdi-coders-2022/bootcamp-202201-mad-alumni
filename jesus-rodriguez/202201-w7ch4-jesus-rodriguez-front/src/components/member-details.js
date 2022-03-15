import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
export function MemberDetails({ member }) {
  const dispatch = useDispatch();
  console.log(member);

  return (
    <>
      <div className="member">
        <img className="member__image" src={`${member.image}`} alt="" />
        <p>Nombe {member.name} </p>
        <p>Age {member.age} </p>
        <p>Nationality {member.nationality} </p>
        <p>Enemies {member.enemies.name} </p>
        <p>Friends {member.friends.name} </p>
        <Link to={`/update-member/${member._id}`}>
          <button className="button" type="button">
            ✏
          </button>
        </Link>
      </div>
    </>
  );
}
