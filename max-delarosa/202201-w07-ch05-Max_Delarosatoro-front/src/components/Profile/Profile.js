/* eslint-disable no-underscore-dangle */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../core/Button/Button';
import * as actions from '../../redux/auth/actionCreators';

export default function Profile() {
    const userInfo = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const [editMode, setEditMode] = useState(false);
    const [formValue, setFormValue] = useState({
        name: userInfo.name,
        lastName: userInfo.lastName,
    });

    const handleChange = (e) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value });
    };

    const handleClick = (e) => {
        if (e.target.id === 'edit') setEditMode(true);
        else if (e.target.id === 'save') {
            dispatch(actions.updateProfile(formValue));
            setEditMode(false);
        }
    };

    return (
        <main className="main">
            <div className="user-detail">
                <div className="user-detail__image-outer-container">
                    <div className="user-detail__image-container">
                        <img
                            src={userInfo.profilePicUrl}
                            alt={`${userInfo.name} ${userInfo.lastName}`}
                            className="user-detail__image"
                        />
                    </div>
                </div>
                <div className="user-detail__info-outer-container">
                    <div className="user-detail__info-container">
                        <p className="user-detail__info">Name: </p>
                        {!editMode ? (
                            <p className="user-detail__info">{userInfo.name}</p>
                        ) : (
                            <input
                                name="name"
                                onChange={handleChange}
                                value={formValue.name}
                                type="text"
                            />
                        )}
                    </div>
                    <div className="user-detail__info-container">
                        <p className="user-detail__info">Last Name: </p>
                        {!editMode ? (
                            <p className="user-detail__info">
                                {userInfo.lastName}
                            </p>
                        ) : (
                            <input
                                name="lastName"
                                onChange={handleChange}
                                value={formValue.lastName}
                                type="text"
                            />
                        )}
                    </div>
                    {!editMode ? (
                        <Button id="edit" handler={handleClick}>
                            Edit Info
                        </Button>
                    ) : (
                        <Button id="save" handler={handleClick}>
                            Save
                        </Button>
                    )}
                </div>
            </div>
        </main>
    );
}
