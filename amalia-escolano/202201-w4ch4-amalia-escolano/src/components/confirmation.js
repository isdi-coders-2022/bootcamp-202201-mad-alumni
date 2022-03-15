import { useContext } from 'react';
import { context } from '../context/context-provider';

export default function Confirmation() {
  const { updateStepForm, updateUser } = useContext(context);

  function handleClick() {
    // updateUser()
    updateStepForm('done');
  }

  return (
    <>
      <h2>Formulario de confirmacion</h2>
      <button type="button" onClick={handleClick}>
        Pulsa aqui
      </button>
    </>
  );
}
