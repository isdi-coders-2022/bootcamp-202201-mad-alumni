/* eslint-disable no-underscore-dangle */
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Button from '../core/Button/Button';
import * as actions from '../../redux/auth/actionCreators';
import './User.scss';

export function User({ user, friends, enemies }) {
    const dispatch = useDispatch();

    const [friend, setFriend] = useState(false);
    const [enemy, setEnemy] = useState(false);

    useEffect(() => {
        setFriend(friends.some((item) => item._id === user._id));
    }, [friends, user._id]);

    useEffect(() => {
        setEnemy(enemies.some((item) => item._id === user._id));
    }, [enemies, user._id]);

    const handleClick = (e) => {
        if (e.target.id === 'toggle-friend') {
            dispatch(actions.toggleFriend(user._id));
        } else if (e.target.id === 'toggle-enemy') {
            dispatch(actions.toggleEnemy(user._id));
        }
    };

    return (
        <div className="user">
            <div className="user__img-container">
                <img
                    src={user.profilePicUrl}
                    alt={`${user.name} ${user.lastName}`}
                    className="user__img"
                />
            </div>
            <Link to={`/user-detail/${user._id}`} className="user__name">
                {user.name} {user.lastName}
            </Link>
            <div className="user__action-container">
                <Button id="toggle-friend" handler={handleClick}>
                    {!friend ? 'Add Friend' : 'Remove Friend'}
                </Button>
                <Button id="toggle-enemy" handler={handleClick}>
                    {!enemy ? 'Add Enemy' : 'Remove Enemy'}
                </Button>
            </div>
        </div>
    );
}
