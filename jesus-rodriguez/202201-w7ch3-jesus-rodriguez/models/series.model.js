import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    genre: { type: String },
    platform: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Platform',
            required: true,
        },
    ],
    watchUser: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'User',
        },
    ],
});
userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        delete returnedObject.__v;
    },
});
export const Serie = mongoose.model('Serie', userSchema);
