import { createContext } from 'react';
import { useTasks } from '../hooks/useTasks';

export const GlobalContext = createContext();

export function ContextProvider({ children }) {
    return (
        <GlobalContext.Provider value={useTasks()}>
            {children}
        </GlobalContext.Provider>
    );
}
