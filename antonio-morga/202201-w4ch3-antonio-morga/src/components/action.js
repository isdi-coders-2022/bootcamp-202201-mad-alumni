export function Action({
  children,
  actionClass,
  displayed,
  allDigits,
  updateCallStatus,
  isActive,
}) {
  const handleClick = () => {
    if (isActive) {
      updateCallStatus();
    }
  };

  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a
      onClick={handleClick}
      href="#"
      className={`${actionClass} ${displayed} ${allDigits}`}
    >
      {children}
    </a>
  );
}
