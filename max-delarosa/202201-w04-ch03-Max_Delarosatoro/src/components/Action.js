/* eslint-disable jsx-a11y/anchor-is-valid */
import propTypes from 'prop-types';

export default function Action({
    displayText,
    numberDisplay,
    toggleCall,
    activeCall,
}) {
    const handleClick = (e) => {
        toggleCall();
    };

    return (
        <a
            onClick={handleClick}
            role="button"
            className={`${displayText.toLowerCase()} ${
                activeCall === false &&
                displayText === 'Call' &&
                numberDisplay.length === 9
                    ? 'active'
                    : ''
            }
            ${activeCall === true && displayText === 'Hang' ? 'active' : ''}`}
            href="#"
        >
            {displayText}
        </a>
    );
}

Action.propTypes = {
    displayText: propTypes.string.isRequired,
    numberDisplay: propTypes.arrayOf(propTypes.string),
    toggleCall: propTypes.func.isRequired,
    activeCall: propTypes.bool.isRequired,
};

Action.defaultProps = {
    numberDisplay: [],
};
