import mongoose from 'mongoose';

const seriesSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    pricePerMonth: { type: Boolean, required: true },
});

seriesSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        delete returnedObject.__v;
    },
});

export const Serie = mongoose.model('Serie', seriesSchema);
