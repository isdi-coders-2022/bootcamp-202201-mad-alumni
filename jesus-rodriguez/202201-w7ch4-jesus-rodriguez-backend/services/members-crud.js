import { User } from '../models/user.models.js';
import { mongoConnect } from './db.js';

export async function getAllUsers() {
    await mongoConnect();
    return User.find({})
        .populate('friends', {
            enemies: 0,
            friends: 0,
            age: 0,
            nationality: 0,
            image: 0,
        })
        .populate('enemies', {
            enemies: 0,
            friends: 0,
            age: 0,
            nationality: 0,
            image: 0,
        });
}

export async function getUser(id) {
    await mongoConnect();
    return User.findById(id)
        .populate('friends', {
            enemies: 0,
            friends: 0,
            age: 0,
            nationality: 0,
            image: 0,
        })
        .populate('enemies', {
            enemies: 0,
            friends: 0,
            age: 0,
            nationality: 0,
            image: 0,
        });
}

export async function updateUser(id, partialUser) {
    await mongoConnect();
    return User.findByIdAndUpdate(id, partialUser, { new: true });
}

export async function deleteUser(id) {
    await mongoConnect();
    return User.findByIdAndDelete(id);
}
