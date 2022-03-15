import { User } from '../models/user.models.js';

export async function getAllUsers() {
    return await User.find({}).populate('friend', {
        password: 0,
    });
}
export async function getUser(id, User) {
    return await User.findById(id);
}

export async function updateUser(id, partial, User) {
    return await User.findByIdAndUpdate(id, partial, {
        new: true,
    });
}
