import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    image: { type: String, required: false },
    password: { type: String, required: true },
    sex: { type: String, required: false },
    friend: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'User',
        },
    ],
    enemy: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'User',
        },
    ],
});

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        delete returnedObject.__v;
        delete returnedObject.password;
    },
});

export const User = mongoose.model('User', userSchema);
