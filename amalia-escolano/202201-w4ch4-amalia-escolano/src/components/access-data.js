import { useContext } from 'react';
import { context } from '../context/context-provider';

export default function AccessData() {
  const { updateStepForm } = useContext(context);

  function handleClick() {
    // updateUserState(userDataLocal);
    updateStepForm(3);
  }

  return (
    <>
      <h2>Datos de acceso</h2>
      <button type="button" onClick={handleClick}>
        Pulsa aqui
      </button>
    </>
  );
}
