import propTypes from 'prop-types';
import Action from './Action';
import Display from './Display';

export default function Actions({
    numberDisplay,
    startCall,
    hangCall,
    activeCall,
}) {
    return (
        <div className="actions">
            <Display numberDisplay={numberDisplay} />
            {!activeCall && (
                <Action
                    toggleCall={startCall}
                    numberDisplay={numberDisplay}
                    displayText="Call"
                    activeCall={activeCall}
                />
            )}
            {activeCall && (
                <Action
                    toggleCall={hangCall}
                    displayText="Hang"
                    activeCall={activeCall}
                />
            )}
        </div>
    );
}

Actions.propTypes = {
    numberDisplay: propTypes.arrayOf(propTypes.string).isRequired,
    startCall: propTypes.func.isRequired,
    hangCall: propTypes.func.isRequired,
    activeCall: propTypes.bool.isRequired,
};
