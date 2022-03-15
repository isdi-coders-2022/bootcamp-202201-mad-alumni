import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export function Menu({ menuOptions }) {
    return (
        <nav className="desktop-nav">
            <ul className="desktop-nav__menu">
                {menuOptions.map((item) => (
                    <li className="menuitem" key={item.path}>
                        <Link className="menu__item-link" to={item.path}>
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

// Array<Object>
Menu.propTypes = {
    menuOptions: PropTypes.arrayOf(PropTypes.object).isRequired,
};
