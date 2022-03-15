import { User } from '../models/user.model.js';

export async function findUser(user) {
    return User.findOne({ username: user.username });
}

export async function findUserById(id) {
    return User.findById(id);
}

export async function addUser(newUser) {
    return User.create(newUser);
}
