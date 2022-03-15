export function CallHang({ toggleIsCalling, isCalling }) {
    return (
        <div>
            {isCalling ? (
                <button
                    type="button"
                    className="hang active"
                    onClick={() => toggleIsCalling()}
                >
                    Hang
                </button>
            ) : (
                <button
                    className="call"
                    onClick={() => toggleIsCalling()}
                    type="button"
                >
                    Call
                </button>
            )}
        </div>
    );
}
