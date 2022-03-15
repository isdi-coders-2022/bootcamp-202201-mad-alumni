import { useContext, useState } from 'react';
import { Context } from '../context/ContextProvider';
import './Login.css';

export default function Login() {
    const [formState, setFormState] = useState({
        username: '',
        password: '',
    });
    const [loginState, setLoginState] = useState('');

    const { logIn, resetForm } = useContext(Context);

    const handleClick = async () => {
        setLoginState(await logIn(formState));
    };

    const handleClickRegister = () => {
        resetForm();
    };

    return (
        <form className="login">
            <h1 className="login__title">Login</h1>
            {loginState === false && <p>Incorrect Credentials</p>}
            <div className="login__container">
                <label htmlFor="username">Username:</label>
                <input
                    value={formState.username}
                    onChange={(e) =>
                        setFormState({ ...formState, username: e.target.value })
                    }
                    id="username"
                    type="text"
                />
            </div>
            <div className="login__container">
                <label htmlFor="password">Password:</label>
                <input
                    value={formState.password}
                    onChange={(e) =>
                        setFormState({ ...formState, password: e.target.value })
                    }
                    id="password"
                    type="password"
                />
            </div>
            <button onClick={handleClick} type="button" className="login__btn">
                Login
            </button>
            <button type="button" onClick={handleClickRegister}>
                Register
            </button>
        </form>
    );
}
