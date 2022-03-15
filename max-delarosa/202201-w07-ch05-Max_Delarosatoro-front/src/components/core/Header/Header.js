import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';
import './Header.scss';

export function Header() {
    return (
        <header className="header">
            <Link className="header__link" to="/">
                <h1 className="header__title">Fakebook</h1>
            </Link>
            <Nav />
        </header>
    );
}
