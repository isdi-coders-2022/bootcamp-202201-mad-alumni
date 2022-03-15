/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as actions from '../../redux/robots/action-creators';
import './AddRobot.scss';

export default function AddRobot() {
    const [formValue, setFormValue] = useState({
        name: '',
        image: '',
        speed: '1',
        resistance: '1',
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleChange = (e) => {
        setFormValue({ ...formValue, [e.target.id]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(actions.addRobot(formValue));
        navigate('/');
    };
    return (
        <main className="main">
            <form onSubmit={handleSubmit} className="add-form">
                <h2>Create a Robot</h2>
                <div className="add-form__field-container">
                    <label htmlFor="name" className="add-form__label">
                        Name:
                    </label>
                    <input
                        value={formValue.name}
                        onChange={handleChange}
                        id="name"
                        required
                        type="text"
                        className="add-form__field"
                        placeholder="name"
                    />
                </div>
                <div className="add-form__field-container">
                    <label htmlFor="image" className="add-form__label">
                        Image URL:
                    </label>
                    <input
                        value={formValue.image}
                        onChange={handleChange}
                        id="image"
                        required
                        type="url"
                        placeholder="image"
                        className="add-form__field"
                    />
                </div>
                <div className="add-form__field-container">
                    <label htmlFor="speed" className="add-form__label">
                        Speed:
                    </label>
                    <input
                        value={formValue.speed}
                        type="text"
                        readOnly
                        className="add-form__field add-form__field--range-value"
                    />
                    <input
                        value={formValue.speed}
                        onChange={handleChange}
                        id="speed"
                        type="range"
                        min="1"
                        max="10"
                        data-testid="speed"
                    />
                </div>
                <div className="add-form__field-container">
                    <label htmlFor="resistance" className="add-form__label">
                        Resistance:
                    </label>
                    <input
                        value={formValue.resistance}
                        readOnly
                        type="text"
                        className="add-form__field add-form__field--range-value"
                    />
                    <input
                        id="resistance"
                        value={formValue.resistance}
                        onChange={handleChange}
                        type="range"
                        min="1"
                        max="10"
                        data-testid="resistance"
                    />
                </div>
                <button
                    disabled={
                        !!(formValue.name === '' || formValue.image === '')
                    }
                    className="add-form__button"
                    type="submit"
                >
                    Create
                </button>
            </form>
        </main>
    );
}
