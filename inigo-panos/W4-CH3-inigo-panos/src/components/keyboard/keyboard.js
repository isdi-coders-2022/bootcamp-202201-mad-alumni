import React, { App } from 'react';

export function Keyboard({ stateKeyboard }) {
  const sumarANumero = () => {
    console.log('Ha sumado un numero');
    const [array, setArray] = stateKeyboard([]);
    // stateKeyboard = [...stateKeyboard, value];
  };

  let callNumber = [];

  function handleKey(ev) {
    console.log('Has pulsado la tecla', ev);
    // const newCallNumber = '';
    const number = ev;
    if (callNumber.length < 9) {
      callNumber += number;
    }
    console.log('New call number', callNumber, callNumber.length);
  }

  // const handleKey2 = (e) => {
  //   console.log(e.current.value);
  // };

  return (
    <div className="keyboard-container">
      <ol className="keyboard">
        <li>
          <button
            value="1"
            type="button"
            className="key"
            // onClick={() => handleKey(`${value}`)}
            // eslint-disable-next-line react/no-this-in-sfc
            onClick={() => handleKey(1)}
          >
            1
          </button>
        </li>
        <li>
          <button
            value="2"
            type="button"
            className="key"
            onClick={() => handleKey(2)}
          >
            2
          </button>
        </li>
        <li>
          <button
            value="3"
            type="button"
            className="key"
            onClick={() => handleKey(3)}
          >
            3
          </button>
        </li>
        <li>
          <button
            value="4"
            type="button"
            className="key"
            onClick={() => handleKey(4)}
          >
            4
          </button>
        </li>
        <li>
          <button
            value="5"
            type="button"
            className="key"
            onClick={() => handleKey(5)}
          >
            5
          </button>
        </li>
        <li>
          <button
            value="6"
            type="button"
            className="key"
            onClick={() => handleKey(6)}
          >
            6
          </button>
        </li>
        <li>
          <button
            value="7"
            type="button"
            className="key"
            onClick={() => handleKey(7)}
          >
            7
          </button>
        </li>
        <li>
          <button
            value="8"
            type="button"
            className="key"
            onClick={() => handleKey(8)}
          >
            8
          </button>
        </li>
        <li>
          <button
            value="9"
            type="button"
            className="key"
            onClick={() => handleKey(9)}
          >
            9
          </button>
        </li>
        <li>
          <button
            value="0"
            type="button"
            className="key"
            onClick={() => handleKey(0)}
          >
            0
          </button>
        </li>
        <li>
          <button type="button" className="key big">
            delete
          </button>
        </li>
      </ol>
    </div>
  );
}
