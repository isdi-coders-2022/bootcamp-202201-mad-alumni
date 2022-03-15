import './Header.scss';
import { Link, useNavigate } from 'react-router-dom';

export function Header() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <header className="header">
            <h1>Robots</h1>
            <div className="header__auth-container">
                {!localStorage.getItem('token') ? (
                    <>
                        <Link
                            to="/login"
                            type="button"
                            className="header__login-button"
                        >
                            Login
                        </Link>
                        <Link
                            to="/register"
                            type="button"
                            className="header__login-button"
                        >
                            Register
                        </Link>
                    </>
                ) : (
                    <button
                        onClick={handleLogout}
                        type="button"
                        className="header__logout-button"
                    >
                        Logout
                    </button>
                )}
            </div>
        </header>
    );
}
