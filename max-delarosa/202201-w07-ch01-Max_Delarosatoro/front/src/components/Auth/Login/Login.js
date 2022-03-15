import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as services from '../../../services/apiRequest';

/* eslint-disable jsx-a11y/label-has-associated-control */
export default function Login() {
    const [formValue, setFormValue] = useState({
        name: '',
        password: '',
    });
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        setFormValue({ ...formValue, [e.target.id]: e.target.value });
    };

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await services.login(formValue);
            const { token } = data.data;
            if (token) {
                localStorage.setItem('token', token);
                navigate('/');
            }
        } catch (error) {
            setErrorMessage(error.response.data.Error);
        }
    };

    return (
        <main className="main">
            <form onSubmit={handleSubmit} className="add-form">
                <h2>Login</h2>
                <p>{errorMessage}</p>
                <div className="add-form__field-container">
                    <label htmlFor="name" className="add-form__label">
                        Name:
                    </label>
                    <input
                        value={formValue.name}
                        onChange={handleChange}
                        className="add-form__"
                        id="name"
                        type="text"
                    />
                </div>
                <div className="add-form__field-container">
                    <label htmlFor="name" className="add-form__label">
                        Password:
                    </label>
                    <input
                        value={formValue.password}
                        onChange={handleChange}
                        className="add-form__"
                        id="password"
                        type="password"
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </main>
    );
}
