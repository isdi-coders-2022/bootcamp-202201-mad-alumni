import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    isAdmin: { type: Boolean, required: true },
    passwd: { type: String, required: true },
    watchedSeries: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Serie',
        },
    ],
});
userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        delete returnedObject.__v;
        delete returnedObject.passwd;
    },
});
export const User = mongoose.model('User', userSchema);
