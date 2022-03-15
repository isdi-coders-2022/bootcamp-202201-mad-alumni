import PropTypes from 'prop-types';

export default function Key({ text, modifier, action, activeCall }) {
    const handleClick = (e) => {
        action(e.target.textContent);
    };

    return (
        <li>
            <button
                onClick={handleClick}
                type="button"
                className={`key ${modifier}`}
                disabled={activeCall}
            >
                {text}
            </button>
        </li>
    );
}

Key.propTypes = {
    text: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    modifier: PropTypes.string,
    action: PropTypes.func.isRequired,
    activeCall: PropTypes.bool.isRequired,
};

Key.defaultProps = { modifier: '' };
