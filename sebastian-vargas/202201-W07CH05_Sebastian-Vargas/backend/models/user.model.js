import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    friends: [{ type: mongoose.Types.ObjectId, ref: 'Friend' }],
    enemies: [{ type: mongoose.Types.ObjectId, ref: 'Enemy' }],
});

console.log(userSchema);

export const User = mongoose.model('User', userSchema);
