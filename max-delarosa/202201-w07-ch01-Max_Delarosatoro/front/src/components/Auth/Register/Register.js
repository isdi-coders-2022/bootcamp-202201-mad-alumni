/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as services from '../../../services/apiRequest';

export default function Register() {
    const [formValue, setFormValue] = useState({
        name: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormValue({ ...formValue, [e.target.id]: e.target.value });
    };

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await services.register(formValue);
            if (data) {
                navigate('/login');
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <main className="main">
            <form onSubmit={handleSubmit} className="add-form">
                <h2>Register</h2>
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
                <button type="submit">Register</button>
            </form>
        </main>
    );
}
