import PropTypes from 'prop-types';

export default function Info({ activeCall }) {
    return (
        <span className={`message ${activeCall ? '' : 'off'}`}>Calling...</span>
    );
}

Info.propTypes = {
    activeCall: PropTypes.bool.isRequired,
};
