import { User } from '../models/user.js';
import { mongoConnect } from './connection.js';

export async function findUser(user) {
    await mongoConnect();
    return User.findOne({ name: user.name });
}

export async function addUser(newUser) {
    await mongoConnect();
    const newUserDb = new User(newUser);
    return newUserDb.save();
}
