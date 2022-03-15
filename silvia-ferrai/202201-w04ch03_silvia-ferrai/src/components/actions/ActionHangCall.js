export function ActionHangCall({ isCalling, calling }) {
    return (
        <div>
            {isCalling ? (
                <button
                    type="button"
                    className="hang active"
                    onClick={() => calling()}
                >
                    Hang
                </button>
            ) : (
                <button
                    type="button"
                    className="call"
                    onClick={() => calling()}
                >
                    Call
                </button>
            )}
        </div>
    );
}
