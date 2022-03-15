import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getStorage, uploadBytes, getDownloadURL, ref } from 'firebase/storage';
import Button from '../core/Button/Button';
import './Register.scss';
import { app } from '../../firebase/connection';
import * as authApi from '../../services/auth';

/* eslint-disable jsx-a11y/label-has-associated-control */
export function Register() {
    const storage = getStorage(app);
    const [formState, setFormState] = useState({
        username: '',
        password: '',
        name: '',
        lastName: '',
    });
    const [profileImage, setProfileImage] = useState(null);

    const navigate = useNavigate();
    const auth = useSelector((state) => state.auth);

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let url = '';
        if (profileImage !== null) {
            const imageRef = ref(storage, profileImage.name);
            await uploadBytes(imageRef, profileImage);
            url = await getDownloadURL(imageRef);
        }

        const response = await authApi.register({
            ...formState,
            profilePicUrl: url,
        });
        if (response.data) {
            navigate('/login');
        }
    };

    useEffect(() => {
        if (auth.token) {
            navigate('/');
        }
    }, [auth, navigate]);

    return (
        <main className="main">
            <form onSubmit={handleSubmit} className="register">
                <h2 className="register__title">Register</h2>
                <div className="register__input-container">
                    <label htmlFor="username" className="register__label">
                        Username:
                    </label>
                    <input
                        value={formState.username}
                        onChange={handleChange}
                        id="username"
                        type="text"
                        className="register__input"
                    />
                </div>
                <div className="register__input-container">
                    <label htmlFor="password" className="register__label">
                        Password:
                    </label>
                    <input
                        value={formState.password}
                        onChange={handleChange}
                        id="password"
                        type="password"
                        className="register__input"
                    />
                </div>
                <div className="register__input-container">
                    <label htmlFor="name" className="register__label">
                        Name:
                    </label>
                    <input
                        value={formState.name}
                        onChange={handleChange}
                        id="name"
                        type="text"
                        className="register__input"
                    />
                </div>
                <div className="register__input-container">
                    <label htmlFor="lastName" className="register__label">
                        Last Name:
                    </label>
                    <input
                        value={formState.lastName}
                        onChange={handleChange}
                        id="lastName"
                        type="text"
                        className="register__input"
                    />
                </div>
                <div className="register__input-container">
                    <label htmlFor="profilePicUrl" className="register__label">
                        Profile Picture:
                    </label>
                    <input
                        value={formState.profilePicUrl}
                        onChange={(e) => setProfileImage(e.target.files[0])}
                        id="profilePicUrl"
                        data-testid="file"
                        type="file"
                        className="register__input"
                    />
                </div>
                <Button submit>Register</Button>
            </form>
        </main>
    );
}
