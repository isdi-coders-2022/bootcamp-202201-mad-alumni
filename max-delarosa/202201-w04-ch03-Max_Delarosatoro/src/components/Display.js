import propTypes from 'prop-types';

export default function Display({ numberDisplay }) {
    return <span className="number">{[...numberDisplay].join('')}</span>;
}

Display.propTypes = {
    numberDisplay: propTypes.arrayOf(propTypes.string).isRequired,
};
