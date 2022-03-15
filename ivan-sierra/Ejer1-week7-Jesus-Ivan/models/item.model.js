import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
    title: { type: String, required: true },
    userItem: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
});

itemSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        delete returnedObject.__v;
    },
});

export const Item = mongoose.model('Item', itemSchema);
