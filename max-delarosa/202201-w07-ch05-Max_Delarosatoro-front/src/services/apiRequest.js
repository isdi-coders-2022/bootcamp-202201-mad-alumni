import axios from 'axios';

const url = 'http://localhost:4000/users/';

export const loadUsers = () =>
    axios.get(`${url}other-users`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });

export const updateProfile = (partialUser) =>
    axios.patch(`${url}my-profile`, partialUser, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });

export const toggleFriend = (id) =>
    axios.get(`${url}toggle-friend/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });

export const toggleEnemy = (id) =>
    axios.get(`${url}toggle-enemy/${id}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    });
