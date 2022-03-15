import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    isAdmin: { type: Boolean, required: true },
    password: { type: String, required: true },
    watchedSeries: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Item',
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
