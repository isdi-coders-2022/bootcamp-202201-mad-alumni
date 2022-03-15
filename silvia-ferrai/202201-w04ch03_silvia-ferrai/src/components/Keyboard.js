export function Keyboard({ addNumber, deleteNumber }) {
    return (
        <div className="keyboard-container">
            <ol className="keyboard">
                <li>
                    <button
                        type="button"
                        className="key"
                        onClick={() => addNumber(1)}
                    >
                        1
                    </button>
                </li>
                <li>
                    <button
                        type="button"
                        className="key"
                        onClick={() => addNumber(2)}
                    >
                        2
                    </button>
                </li>
                <li>
                    <button
                        type="button"
                        className="key"
                        onClick={() => addNumber(3)}
                    >
                        3
                    </button>
                </li>
                <li>
                    <button
                        type="button"
                        className="key"
                        onClick={() => addNumber(4)}
                    >
                        4
                    </button>
                </li>
                <li>
                    <button
                        type="button"
                        className="key"
                        onClick={() => addNumber(5)}
                    >
                        5
                    </button>
                </li>
                <li>
                    <button
                        type="button"
                        className="key"
                        onClick={() => addNumber(6)}
                    >
                        6
                    </button>
                </li>
                <li>
                    <button
                        type="button"
                        className="key"
                        onClick={() => addNumber(7)}
                    >
                        7
                    </button>
                </li>
                <li>
                    <button
                        type="button"
                        className="key"
                        onClick={() => addNumber(8)}
                    >
                        8
                    </button>
                </li>
                <li>
                    <button
                        type="button"
                        className="key"
                        onClick={() => addNumber(9)}
                    >
                        9
                    </button>
                </li>
                <li>
                    <button
                        type="button"
                        className="key"
                        onClick={() => addNumber(0)}
                    >
                        0
                    </button>
                </li>
                <li>
                    <button
                        type="button"
                        className="key big"
                        onClick={deleteNumber}
                    >
                        delete
                    </button>
                </li>
            </ol>
        </div>
    );
}
