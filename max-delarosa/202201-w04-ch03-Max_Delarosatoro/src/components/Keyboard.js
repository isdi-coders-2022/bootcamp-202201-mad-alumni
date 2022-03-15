import PropTypes from 'prop-types';
import Key from './Key';

export default function Keyboard({
    keys,
    addNumber,
    deleteNumber,
    activeCall,
}) {
    return (
        <div className="keyboard-container">
            <ol className="keyboard">
                {keys.map((item) => (
                    <Key
                        activeCall={activeCall}
                        action={addNumber}
                        key={item}
                        text={item}
                    />
                ))}
                <Key
                    activeCall={activeCall}
                    action={deleteNumber}
                    text="delete"
                    modifier="big"
                />
            </ol>
        </div>
    );
}

Keyboard.propTypes = {
    keys: PropTypes.arrayOf(PropTypes.number, PropTypes.string).isRequired,
    addNumber: PropTypes.func.isRequired,
    deleteNumber: PropTypes.func.isRequired,
    activeCall: PropTypes.bool.isRequired,
};
