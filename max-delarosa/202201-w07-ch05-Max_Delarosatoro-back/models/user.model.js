import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    profilePicUrl: { type: String, required: false, default: '' },
    friends: [{ type: mongoose.Types.ObjectId, ref: 'User' }],
    enemies: [{ type: mongoose.Types.ObjectId, ref: 'User' }],
});

export const User = mongoose.model('User', userSchema);
