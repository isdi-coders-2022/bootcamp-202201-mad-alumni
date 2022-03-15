/* eslint-disable no-underscore-dangle */
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './UserDetail.scss';

export default function UserDetail() {
    const { id } = useParams();
    const userInfo = useSelector((state) =>
        state.users.find((item) => item._id === id.replace('id=', ''))
    );
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
                        <p className="user-detail__info">{userInfo.name}</p>
                    </div>
                    <div className="user-detail__info-container">
                        <p className="user-detail__info">Last Name: </p>
                        <p className="user-detail__info">{userInfo.lastName}</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
