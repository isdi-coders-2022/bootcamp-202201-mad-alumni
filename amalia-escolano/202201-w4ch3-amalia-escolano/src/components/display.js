export function Display({ placeCall }) {
  return (
    <span className="message">
      {placeCall ? 'Calling....' : 'Enter number'}
    </span>
  );
}
