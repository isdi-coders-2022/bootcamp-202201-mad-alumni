import { Key } from './key';
import { useState } from 'react';

export function Keyboard() {
  const allNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [nums, setNums] = useState(allNum);

  const addNum = (newNum) => {
    setNums([...nums, newNum]);
  };
  return (
    <div class="keyboard-container">
      <ol class="keyboard">
        <Key addNum={addNum} nums={nums}></Key>
      </ol>
    </div>
  );
}
