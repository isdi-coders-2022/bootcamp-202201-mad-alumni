export function Action({
  callNumber,
  placeCall,
  updatePlaceCall,
  updateCallNumber,
}) {
  function handleCall() {
    if (callNumber.length === 9) {
      const newPlaceCall = true;
      updatePlaceCall(newPlaceCall);
    }
  }

  function handleHang() {
    const newPlaceCall = false;
    updatePlaceCall(newPlaceCall);
    const hang = '';
    updateCallNumber(hang);
  }
  return (
    <div className="actions">
      <span className="number">{callNumber}</span>
      <a
        href="#"
        onClick={handleCall}
        className={!placeCall ? 'call active' : 'call'}
      >
        Call
      </a>
      <a
        href="#"
        onClick={handleHang}
        className={placeCall ? 'hang active' : 'hang'}
      >
        Hang
      </a>
    </div>
  );
}
