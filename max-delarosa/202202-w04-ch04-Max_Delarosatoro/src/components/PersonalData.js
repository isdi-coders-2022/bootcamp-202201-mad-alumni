import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../context/ContextProvider';

export default function PersonalData() {
    const [formState, setformState] = useState({
        name: '',
        lastName: '',
        birthDate: '',
        gender: '',
        email: '',
        newsletter: '',
    });

    const { updatePersonalData } = useContext(Context);

    return (
        <form className="form">
            <div className="form__field-container">
                <label className="form__main-label" htmlFor="name">
                    Name:
                </label>
                <input
                    id="name"
                    type="text"
                    value={formState.name}
                    onChange={(e) =>
                        setformState({ ...formState, name: e.target.value })
                    }
                />
            </div>

            <div className="form__field-container">
                <label className="form__main-label" htmlFor="lastName">
                    Last Name:
                </label>
                <input
                    onChange={(e) =>
                        setformState({ ...formState, lastName: e.target.value })
                    }
                    id="lastName"
                    type="text"
                    value={formState.lastName}
                />
            </div>

            <div className="form__field-container">
                <label className="form__main-label" htmlFor="birthDate">
                    Birth Date:
                </label>
                <input
                    onChange={(e) =>
                        setformState({
                            ...formState,
                            birthDate: e.target.value,
                        })
                    }
                    id="birthDate"
                    type="date"
                    value={formState.birthDate}
                />
            </div>

            <div className="form__field-container">
                <label className="form__main-label" htmlFor="gender">
                    Gender:
                </label>
                <div className="form__gender-container">
                    <div className="form__gender-inner-container">
                        <label htmlFor="male">Male</label>
                        <input
                            type="radio"
                            id="male"
                            name="gender"
                            value="male"
                            onChange={(e) =>
                                setformState({
                                    ...formState,
                                    gender: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="form__gender-inner-container">
                        <label htmlFor="female">Female</label>
                        <input
                            type="radio"
                            id="female"
                            name="gender"
                            value="female"
                            onChange={(e) =>
                                setformState({
                                    ...formState,
                                    gender: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="form__gender-inner-container">
                        <label htmlFor="other">Other</label>
                        <input
                            type="radio"
                            id="other"
                            name="gender"
                            value="other"
                            onChange={(e) =>
                                setformState({
                                    ...formState,
                                    gender: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="form__gender-inner-container">
                        <label htmlFor="no-mention">Prefer not to say</label>
                        <input
                            type="radio"
                            id="no-mention"
                            name="gender"
                            value="no-mention"
                            onChange={(e) =>
                                setformState({
                                    ...formState,
                                    gender: e.target.value,
                                })
                            }
                        />
                    </div>
                </div>
            </div>

            <div className="form__field-container">
                <label className="form__main-label" htmlFor="email">
                    Email:
                </label>
                <input
                    onChange={(e) =>
                        setformState({ ...formState, email: e.target.value })
                    }
                    id="email"
                    type="email"
                    value={formState.email}
                />
            </div>

            <div className="form__field-container">
                <label className="form__main-label" htmlFor="newsletter">
                    Do you wish to receive our newsletter?:
                </label>
                <input
                    onChange={(e) =>
                        setformState({
                            ...formState,
                            newsletter: e.target.checked,
                        })
                    }
                    id="newsletter"
                    type="checkbox"
                    value={formState.newsletter}
                />
            </div>
            <div className="form__button-container">
                {!formState.name ||
                !formState.lastName ||
                !formState.birthDate ||
                !formState.gender ||
                !formState.email ? (
                    <button type="button" disabled>
                        Next
                    </button>
                ) : (
                    <Link
                        onClick={() => {
                            updatePersonalData(formState);
                        }}
                        to="/form/access-data"
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
