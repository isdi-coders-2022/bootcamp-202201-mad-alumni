import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../context/ContextProvider';
import './ReviewData.css';

export default function ReviewData() {
    const { newUserData, resetForm, addUser } = useContext(Context);
    const navigate = useNavigate();

    const handleClickConfirm = async () => {
        await addUser(newUserData);
        navigate('/login');
    };

    useEffect(() => {
        if (
            !newUserData ||
            newUserData.name === undefined ||
            newUserData.lastName === undefined ||
            newUserData.birthDate === undefined ||
            newUserData.gender === undefined ||
            newUserData.email === undefined ||
            newUserData.newsletter === undefined ||
            newUserData.username === undefined ||
            newUserData.password === undefined ||
            newUserData.accountType === undefined
        ) {
            navigate('/form/personal-data');
        }
    });

    return (
        <div className="info">
            <div className="info__container">
                <p className="info__field">Name:</p>
                <p className="info__data">{newUserData.name}</p>
            </div>
            <div className="info__container">
                <p className="info__field">Last Name:</p>
                <p className="info__data">{newUserData.lastName}</p>
            </div>
            <div className="info__container">
                <p className="info__field">Birth Date:</p>
                <p className="info__data">{newUserData.birthDate}</p>
            </div>
            <div className="info__container">
                <p className="info__field">Gender:</p>
                <p className="info__data">{newUserData.gender}</p>
            </div>
            <div className="info__container">
                <p className="info__field">Email:</p>
                <p className="info__data">{newUserData.email}</p>
            </div>
            <div className="info__container">
                <p className="info__field">Newsletter:</p>
                <p className="info__data">
                    {newUserData.newsletter ? 'Yes' : 'No'}
                </p>
            </div>
            <div className="info__container">
                <p className="info__field">Username:</p>
                <p className="info__data">{newUserData.username}</p>
            </div>
            <div className="info__container">
                <p className="info__field">Password:</p>
                <p className="info__data">{newUserData.password}</p>
            </div>
            <div className="info__container">
                <p className="info__field">Account Type:</p>
                <p className="info__data">{newUserData.accountType}</p>
            </div>
            <div className="info__container">
                <button
                    className="info__button"
                    onClick={resetForm}
                    type="button"
                >
                    Go Back
                </button>
                <button
                    className="info__button"
                    onClick={handleClickConfirm}
                    type="button"
                >
                    Confirm
                </button>
            </div>
        </div>
    );
}
