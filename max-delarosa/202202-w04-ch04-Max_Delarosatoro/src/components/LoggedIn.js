import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../context/ContextProvider';

export default function LoggedIn() {
    const { isLogged, myData } = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLogged) {
            navigate('/login');
        }
    });

    return (
        <div className="info">
            <div className="info__container">
                <p className="info__field">Name:</p>
                <p className="info__data">{myData.name}</p>
            </div>
            <div className="info__container">
                <p className="info__field">Last Name:</p>
                <p className="info__data">{myData.lastName}</p>
            </div>
            <div className="info__container">
                <p className="info__field">Birth Date:</p>
                <p className="info__data">{myData.birthDate}</p>
            </div>
            <div className="info__container">
                <p className="info__field">Gender:</p>
                <p className="info__data">{myData.gender}</p>
            </div>
            <div className="info__container">
                <p className="info__field">Email:</p>
                <p className="info__data">{myData.email}</p>
            </div>
            <div className="info__container">
                <p className="info__field">Newsletter:</p>
                <p className="info__data">{myData.newsletter ? 'Yes' : 'No'}</p>
            </div>
            <div className="info__container">
                <p className="info__field">Username:</p>
                <p className="info__data">{myData.username}</p>
            </div>
            <div className="info__container">
                <p className="info__field">Password:</p>
                <p className="info__data">{myData.password}</p>
            </div>
            <div className="info__container">
                <p className="info__field">Account Type:</p>
                <p className="info__data">{myData.accountType}</p>
            </div>
        </div>
    );
}
