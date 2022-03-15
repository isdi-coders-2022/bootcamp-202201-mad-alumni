import { useContext, useState } from 'react';
import { context } from '../context/context-provider';

export default function PersonalData() {
  const [userDataLocal, setUserData] = useState({
    name: '',
    lastname: '',
    birthdate: '',
    gender: '',
    email: '',
    info: false,
  });

  const { updateUserState, updateStepForm } = useContext(context);

  function handleClick() {
    updateUserState(userDataLocal);
    updateStepForm(2);
  }

  return (
    <form id="personal-data">
      <p>Datos de contacto</p>
      <label htmlFor="name">
        Nombre:
        <input
          type="text"
          id="name"
          value={userDataLocal.name}
          onChange={(e) =>
            setUserData({ ...userDataLocal, name: e.target.value })
          }
          name="rname"
          required
        />
      </label>
      <label htmlFor="lastname">
        Apellido:
        <input
          type="text"
          id="lastname"
          value={userDataLocal.lastname}
          onChange={(e) =>
            setUserData({ ...userDataLocal, lastname: e.target.value })
          }
          required
        />
      </label>
      <label htmlFor="birthdate">
        Fecha de nacimiento:
        <input
          type="date"
          id="birthdate"
          value={userDataLocal.birthdate}
          onChange={(e) =>
            setUserData({ ...userDataLocal, birthdate: e.target.value })
          }
          required
        />
      </label>
      <label htmlFor="sex">
        <input
          type="radio"
          name="sex"
          value="male"
          onChange={(e) =>
            setUserData({ ...userDataLocal, gender: e.target.value })
          }
        />
        Hombre
      </label>
      <label htmlFor="sex">
        <input
          type="radio"
          name="sex"
          value="female"
          onChange={(e) =>
            setUserData({ ...userDataLocal, gender: e.target.value })
          }
        />
        Mujer
      </label>
      <label htmlFor="email">
        Email:
        <input
          type="email"
          id="email"
          value={userDataLocal.email}
          onChange={(e) =>
            setUserData({ ...userDataLocal, email: e.target.value })
          }
          required
        />
      </label>
      <label htmlFor="info">
        <input
          type="checkbox"
          id="info"
          value={userDataLocal.info}
          onChange={(e) =>
            setUserData({ ...userDataLocal, info: e.target.checked })
          }
        />
        Quiero recibir información.
      </label>
      <button type="button" onClick={handleClick}>
        Siguiente
      </button>
    </form>
  );
}
