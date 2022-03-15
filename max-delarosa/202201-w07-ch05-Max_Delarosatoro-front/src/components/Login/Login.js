import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../core/Button/Button';
import './Login.scss';
import * as actions from '../../redux/auth/actionCreators';

/* eslint-disable jsx-a11y/label-has-associated-control */
export function Login() {
    const [formState, setFormState] = useState({
        username: '',
        password: '',
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const auth = useSelector((state) => state.auth);

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(actions.login(formState));
    };

    useEffect(() => {
        if (auth.token) {
            navigate('/');
        }
    }, [auth, navigate]);

    return (
        <main className="main">
            <form onSubmit={handleSubmit} className="login">
                <h2 className="login__title">Login</h2>
                <div className="login__input-container">
                    <label htmlFor="username" className="login__label">
                        Username:
                    </label>
                    <input
                        value={formState.username}
                        onChange={handleChange}
                        id="username"
                        type="text"
                        placeholder="username"
                        className="login__input"
                    />
                </div>
                <div className="login__input-container">
                    <label htmlFor="password" className="login__label">
                        Password:
                    </label>
                    <input
                        value={formState.password}
                        onChange={handleChange}
                        id="password"
                        type="password"
                        placeholder="password"
                        className="login__input"
                    />
                </div>
                <Button submit>Login</Button>
            </form>
        </main>
    );
}
