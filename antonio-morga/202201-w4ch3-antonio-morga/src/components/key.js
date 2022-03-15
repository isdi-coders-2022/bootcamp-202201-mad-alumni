export function Key({ keyClass, value, updateNumber, deleteLastDigit }) {
  const handleClick = () => {
    typeof value === 'number' ? updateNumber(value) : deleteLastDigit();
  };

  return (
    <li>
      <button onClick={handleClick} type="button" className={keyClass}>
        {value}
      </button>
    </li>
  );
}
