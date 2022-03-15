import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import './Nav.scss';
import * as actions from '../../../redux/auth/actionCreators';

export default function Nav() {
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(actions.logout());
    };

    return (
        <nav className="nav">
            {!auth.token ? (
                <>
                    <Link className="nav__link" to="/login">
                        Login
                    </Link>
                    <Link className="nav__link" to="/register">
                        Register
                    </Link>
                </>
            ) : (
                <>
                    <Link className="nav__link" to="/profile">
                        Profile
                    </Link>
                    <Button handler={handleClick}>Logout</Button>
                </>
            )}
        </nav>
    );
}
