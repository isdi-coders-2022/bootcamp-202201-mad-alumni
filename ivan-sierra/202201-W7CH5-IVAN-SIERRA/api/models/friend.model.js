import mongoose from 'mongoose';

export function friendCreator(modelName = 'Friend') {
    const friendSchema = new mongoose.Schema({
        title: { type: String, required: true, unique: true },
        responsible: {
            type: mongoose.Types.ObjectId,
            ref: 'User',
        },
        isFriend: Boolean,
    });

    friendSchema.set('toJSON', {
        transform: (document, returnedObject) => {
            delete returnedObject.__v;
        },
    });

    let Friend;
    if (mongoose.default.models[modelName]) {
        Friend = mongoose.model(modelName);
    } else {
        Friend = mongoose.model(modelName, friendSchema);
    }
    return Friend;
}
