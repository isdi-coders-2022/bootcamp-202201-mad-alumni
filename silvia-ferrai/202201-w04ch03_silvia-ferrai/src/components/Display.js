export function Display({ isCalling }) {
    return (
        <div>
            <span className="message">{isCalling ? 'calling...' : ''}</span>
        </div>
    );
}
