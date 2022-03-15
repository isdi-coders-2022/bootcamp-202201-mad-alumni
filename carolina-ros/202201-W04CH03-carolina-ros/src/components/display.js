export function Display({ isCalling }) {
    return (
        <div>
            <span className="message">{isCalling && 'Calling...'}</span>
        </div>
    );
}
