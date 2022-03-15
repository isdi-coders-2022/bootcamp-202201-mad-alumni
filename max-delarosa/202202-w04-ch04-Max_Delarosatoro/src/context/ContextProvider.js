import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as api from '../services/apiRequest';

export const Context = createContext({
    newUserData: {},
    updatePersonalData: () => {},
    resetForm: () => {},
    addUser: () => {},
    logIn: () => {},
    isLogged: false,
    myData: {},
});

export default function ContextProvider({ children }) {
    const [newUserData, setNewUserData] = useState({});
    const [isLogged, setIsLogged] = useState(false);
    const [myData, setMyData] = useState({});

    const navigate = useNavigate();

    const updatePersonalData = (payload) => {
        setNewUserData({ ...newUserData, ...payload });
    };

    const resetForm = () => {
        const resetObj = {
            name: undefined,
            lastName: undefined,
            birthDate: undefined,
            gender: undefined,
            email: undefined,
            newsletter: undefined,
            username: undefined,
            password: undefined,
            accountType: undefined,
        };
        setNewUserData(resetObj);
        navigate('/form/personal-data');
    };

    const addUser = async (newUser) => {
        await api.set(newUser);
    };

    const getAllUsers = async () => api.getAll();

    const logIn = async (credentials) => {
        const userList = await getAllUsers();
        const userFound = userList.find(
            (item) =>
                item.username === credentials.username &&
                item.password === credentials.password
        );
        if (userFound) {
            setMyData(userFound);
            setIsLogged(true);
            navigate('/logged-in');
        }
        return false;
    };

    const finalContext = {
        newUserData,
        updatePersonalData,
        resetForm,
        addUser,
        logIn,
        isLogged,
        myData,
    };

    return <Context.Provider value={finalContext}>{children}</Context.Provider>;
}
