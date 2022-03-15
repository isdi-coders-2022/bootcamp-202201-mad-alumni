export function Keyboard({ updateNumber, deleteNumber }) {
    const handleClick = (num) => {
        updateNumber(num.toString());
    };

    return (
        <div className="keyboard-container">
            <ol className="keyboard">
                <li>
                    <button
                        onClick={() => handleClick(1)}
                        type="button"
                        className="key"
                    >
                        1
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => handleClick(2)}
                        type="button"
                        className="key"
                    >
                        2
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => handleClick(3)}
                        type="button"
                        className="key"
                    >
                        3
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => handleClick(4)}
                        type="button"
                        className="key"
                    >
                        4
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => handleClick(5)}
                        type="button"
                        className="key"
                    >
                        5
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => handleClick(6)}
                        type="button"
                        className="key"
                    >
                        6
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => handleClick(7)}
                        type="button"
                        className="key"
                    >
                        7
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => handleClick(8)}
                        type="button"
                        className="key"
                    >
                        8
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => handleClick(9)}
                        type="button"
                        className="key"
                    >
                        9
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => handleClick(0)}
                        type="button"
                        className="key"
                    >
                        0
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => deleteNumber()}
                        type="button"
                        className="key big"
                    >
                        delete
                    </button>
                </li>
            </ol>
        </div>
    );
}
