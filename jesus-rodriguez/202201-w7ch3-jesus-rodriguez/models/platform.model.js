import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    pricePerMonth: { type: Number, required: true },
    series: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Serie',
        },
    ],
});
userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        delete returnedObject.__v;
    },
});
export const Platform = mongoose.model('Platform', userSchema);
