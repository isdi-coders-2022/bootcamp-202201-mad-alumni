export const Button = ({ action, deleteman, gentleman }) => {
  function handleChange() {
    deleteman(gentleman);
  }
  switch (action) {
    case 'delete':
      return (
        <i
          onClick={handleChange}
          className="icon gentleman__icon gentleman__icon--delete fas fa-times"
        ></i>
      );

    case 'select':
      return <i className="icon gentleman__icon fas fa-check"></i>;
    default:
  }
};
