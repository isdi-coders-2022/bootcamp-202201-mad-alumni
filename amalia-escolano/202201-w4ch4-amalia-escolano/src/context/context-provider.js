/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useState } from 'react';
import * as api from '../services/api';

export const context = createContext({
  updateUser: () => {},
  updateUserState: () => {},
  updateStepForm: () => {},
  stepForm: '',
});

export function ContextProvider({ children }) {
  const [userData, setUser] = useState({});
  const [stepForm, setStepForm] = useState(1);

  function updateStepForm(step) {
    const newStep = step;
    setStepForm(newStep);
  }

  function updateUserState(data) {
    const newData = { ...userData, ...data };
    setUser(newData);
  }

  function updateUser(user) {
    api.update(user).then((resp) => {
      setUser(user);
    });
  }

  const finalContext = {
    updateUser,
    updateUserState,
    updateStepForm,
    stepForm,
  };

  return <context.Provider value={finalContext}>{children}</context.Provider>;
}
