import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../context/ContextProvider';

export default function AccessData() {
    const [formState, setformState] = useState({
        username: '',
        password: '',
        repeatPassword: '',
        accountType: '',
    });

    const [passwordMatch, setPasswordMatch] = useState(false);

    const { newUserData, updatePersonalData, resetForm } = useContext(Context);

    const navigate = useNavigate();

    useEffect(() => {
        setPasswordMatch(formState.password === formState.repeatPassword);
    }, [formState.password, formState.repeatPassword]);

    useEffect(() => {
        if (
            !newUserData ||
            newUserData.name === undefined ||
            newUserData.lastName === undefined ||
            newUserData.birthDate === undefined ||
            newUserData.gender === undefined ||
            newUserData.email === undefined ||
            newUserData.newsletter === undefined
        ) {
            navigate('/form/personal-data');
        }
    });

    return (
        <form className="form">
            <div className="form__field-container">
                <label className="form__main-label" htmlFor="username">
                    Username:
                </label>
                <input
                    id="username"
                    type="text"
                    value={formState.username}
                    onChange={(e) =>
                        setformState({ ...formState, username: e.target.value })
                    }
                />
            </div>

            <div className="form__field-container">
                <label className="form__main-label" htmlFor="password">
                    Password:
                </label>
                <input
                    id="password"
                    type="password"
                    value={formState.password}
                    onChange={(e) =>
                        setformState({ ...formState, password: e.target.value })
                    }
                />
            </div>

            <div className="form__field-container">
                <label className="form__main-label" htmlFor="repeatPassword">
                    Repeat Password:
                </label>
                <input
                    id="repeatPassword"
                    type="password"
                    value={formState.repeatPassword}
                    onChange={(e) =>
                        setformState({
                            ...formState,
                            repeatPassword: e.target.value,
                        })
                    }
                />
            </div>
            {formState.password &&
                formState.repeatPassword &&
                !passwordMatch && <p>Passwords dont match</p>}

            <div className="form__field-container">
                <label className="form__main-label" htmlFor="accountType">
                    Account Type:
                </label>
                <select
                    name="accountType"
                    id="accountType"
                    value={formState.accountType}
                    onChange={(e) =>
                        setformState({
                            ...formState,
                            accountType: e.target.value,
                        })
                    }
                >
                    <option selected value="">
                        {' '}
                        -- select an option --{' '}
                    </option>
                    <option value="personal">Personal</option>
                    <option value="pro">Pro</option>
                    <option value="business">Business</option>
                </select>
            </div>

            <div className="form__button-container">
                <button type="button" onClick={resetForm}>
                    Back
                </button>
                {!formState.username ||
                !formState.password ||
                !formState.repeatPassword ||
                !formState.accountType ||
                !passwordMatch ? (
                    <button type="button" disabled>
                        Next
                    </button>
                ) : (
                    <Link
                        onClick={() => {
                            updatePersonalData(formState);
                        }}
                        to={passwordMatch ? '/form/review-data' : '#'}
                    >
                        <button type="button" className="form__button">
                            Next
                        </button>
                    </Link>
                )}
            </div>
        </form>
    );
}
