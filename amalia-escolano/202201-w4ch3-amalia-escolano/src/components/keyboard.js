export function Keyboard({ callNumber, updateCallNumber, placeCall }) {
  const KEYPAD = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  function handleKey(ev) {
    let newCallNumber = '';
    if (callNumber.length < 9) {
      const digit = ev.target.value;
      newCallNumber = callNumber + digit;
      updateCallNumber(newCallNumber);
    }
  }

  function handleDeleteKey() {
    if (placeCall === false) {
      const emptyDisplay = '';
      updateCallNumber(emptyDisplay);
    }
  }

  return (
    <>
      {KEYPAD.map((item) => (
        <li>
          <button
            key={item.index}
            type="button"
            onClick={handleKey}
            onKeyPress={handleKey}
            value={item}
            className="key"
          >
            {item}
          </button>
        </li>
      ))}

      <li>
        <button
          type="button"
          onClick={handleDeleteKey}
          onKeyPress={handleDeleteKey}
          value="delete"
          className="key big"
        >
          delete
        </button>
      </li>
    </>
  );
}
