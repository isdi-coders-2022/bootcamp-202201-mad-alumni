/* eslint-disable jsx-a11y/label-has-associated-control */

import { useContext, useState } from 'react';
import { Context } from '../context/context-provider';

export function PersonalData() {
    const { updateUserLocal } = useContext(Context);

    const [userData, setUserData] = useState({
        name: '',
        lastname: '',
        birthdate: '',
        gender: '',
        email: '',
        info: false,
    });

    function handleClick() {
        console.log(userData);
        updateUserLocal(userData);
    }

    return (
        <>
            <li>
                <label htmlFor="name">
                    Nombre:
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={userData.name}
                        onChange={(e) =>
                            setUserData({ ...userData, name: e.target.value })
                        }
                    />
                </label>
            </li>
            <li>
                <label htmlFor="lastname">
                    Lastname:
                    <input
                        type="text"
                        id="Lastname"
                        name="lastname"
                        required
                        value={userData.lastname}
                        onChange={(e) =>
                            setUserData({
                                ...userData,
                                lastname: e.target.value,
                            })
                        }
                    />
                </label>
            </li>
            <li>
                <label htmlFor="birthdate">
                    Birthdate:
                    <input
                        type="date"
                        id="birthdate"
                        name="trip-start"
                        value="1993-10-20"
                        min="1922-01-01"
                        max="2022-12-31"
                        required
                        value={userData.gender}
                        onChange={(e) =>
                            setUserData({
                                ...userData,
                                birthdate: e.target.value,
                            })
                        }
                    />
                </label>
            </li>
            <li>
                <label htmlFor="sex">Gender:</label>
                <input
                    type="radio"
                    name="male"
                    checked
                    value={userData.name}
                    onChange={(e) =>
                        setUserData({ ...userData, gender: e.target.name })
                    }
                />{' '}
                Hombre
                <input
                    type="radio"
                    name="female"
                    value={userData.name}
                    onChange={(e) =>
                        setUserData({ ...userData, gender: e.target.name })
                    }
                />{' '}
                Mujer
            </li>
            <li>
                <label htmlFor="mail">
                    Correo electrónico:
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={userData.email}
                        onChange={(e) =>
                            setUserData({
                                ...userData,
                                email: e.target.value,
                            })
                        }
                    />
                </label>
            </li>
            <li>
                <label htmlFor="newsletter">
                    Desea recibir información de nuestra newsletter?
                    <input
                        type="checkbox"
                        id="newsletter"
                        name="newsletter"
                        value="newsletter"
                        required
                    />
                </label>
            </li>
            <li>
                <button type="button" onClick={handleClick}>
                    Next
                </button>
            </li>
        </>
    );
}
