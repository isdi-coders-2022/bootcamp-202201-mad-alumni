import { createContext, useEffect, useState } from 'react';
import { User } from '../services/data/user-class';

export const Context = createContext({
  userForm: [],
  updateUserData: () => {},
});

export function ContextProvider({ children }) {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    setUserData(new User());
  }, []);

  const updateUserData = (newData) => {
    setUserData((prev) => ({ ...prev, ...newData }));
  };

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <Context.Provider value={{ userData, updateUserData }}>
      {children}
    </Context.Provider>
  );
}
