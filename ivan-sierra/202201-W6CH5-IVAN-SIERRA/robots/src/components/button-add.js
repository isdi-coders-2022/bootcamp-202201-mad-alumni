import { Link } from 'react-router-dom';
export function ButtonAdd() {
  return (
    <Link to="/newrobot">
      <button type="button">Add Robot</button>
    </Link>
  );
}
