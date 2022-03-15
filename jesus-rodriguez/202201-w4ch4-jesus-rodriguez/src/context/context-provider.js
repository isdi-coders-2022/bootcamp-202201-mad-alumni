import { createContext, useState, useEffect } from 'react';
import * as api from '../services/api';

export const Context = createContext({
    addUsers: () => {},
    updateUserLocal: () => {},
});

export function ContextProvider({ children }) {
    const [user, setUser] = useState({});

    function updateUserLocal(newUser) {
        const newUserlocal = { ...user, newUser };
        setUser(newUserlocal);
    }

    const addUsers = (newUser) => {
        api.setUser(newUser).then((resp) => {
            setUser([...user, resp.data]);
        });
    };

    // eslint-disable-next-line react/jsx-no-constructed-context-values
    const finalContext = {
        addUsers,
        updateUserLocal,
    };

    return <Context.Provider value={finalContext}>{children}</Context.Provider>;
}
