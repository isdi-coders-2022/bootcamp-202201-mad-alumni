export function Info({ active }) {
  // return <span className="message">{active ? 'Calling...' : ''}</span>;
  return (
    <span className={!active ? 'message off' : 'message'}>Calling...</span>
  );
}
