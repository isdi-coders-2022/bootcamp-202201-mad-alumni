import { Key } from './key';

export function Keyboard({ updateNumber, deleteLastDigit }) {
  const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'delete'];

  return (
    <div className="keyboard-container">
      <ol className="keyboard">
        {keys.map((key, i) => (
          <Key
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            deleteLastDigit={deleteLastDigit}
            updateNumber={updateNumber}
            keyClass={typeof key === 'number' ? 'key' : 'key big'}
            value={key}
          />
        ))}
      </ol>
    </div>
  );
}
