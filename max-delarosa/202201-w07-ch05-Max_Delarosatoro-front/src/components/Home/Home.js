/* eslint-disable no-underscore-dangle */
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../redux/users/actionCreators';
import './Home.scss';
import { User } from '../User/User';
import Button from '../core/Button/Button';

export function Home() {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    const users = useSelector((state) => state.users);

    const [friends, setFriends] = useState([]);
    const [enemies, setEnemies] = useState([]);

    const [displayUsers, setDisplayUsers] = useState([]);

    useEffect(() => {
        dispatch(actions.loadUsers());
    }, []);

    useEffect(() => {
        setDisplayUsers(users);
    }, [users]);

    useEffect(() => {
        setFriends(
            users.filter((item) =>
                auth.friends.some((friend) => friend === item._id)
            )
        );
        setEnemies(
            users.filter((item) =>
                auth.enemies.some((enemy) => enemy === item._id)
            )
        );
    }, [users, auth]);

    useEffect(() => {
        console.log(users);
    }, [users]);

    const handleClick = (e) => {
        if (e.target.id === 'show-friends') setDisplayUsers(friends);
        else if (e.target.id === 'show-enemies') setDisplayUsers(enemies);
        else if (e.target.id === 'show-all') setDisplayUsers(users);
    };

    return (
        <main className="main">
            <div className="users">
                <Button id="show-all" handler={handleClick}>
                    Show All Users
                </Button>
                <Button id="show-friends" handler={handleClick}>
                    Show Friends
                </Button>
                <Button id="show-enemies" handler={handleClick}>
                    Show Enemies
                </Button>
                <p>Showing {displayUsers.length} users</p>
                {displayUsers.map((item) => (
                    <User
                        friends={friends}
                        enemies={enemies}
                        key={item._id}
                        user={item}
                    />
                ))}
            </div>
        </main>
    );
}
