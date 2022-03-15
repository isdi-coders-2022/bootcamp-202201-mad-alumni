import mongoose from 'mongoose';

export function platformCreator(modelName = 'platform') {
    const platformSchema = new mongoose.Schema({
        name: { type: String, required: true, unique: true },
        pricePerMonth: { type: Number, required: true },
        series: [
            {
                type: mongoose.Types.ObjectId,
                ref: 'series',
            },
        ],
    });

    platformSchema.set('toJSON', {
        transform: (document, returnedObject) => {
            delete returnedObject.__v;
        },
    });

    let Platform;
    if (mongoose.default.models[modelName]) {
        Platform = mongoose.model(modelName);
    } else {
        Platform = mongoose.model(modelName, platformSchema);
    }
    return Platform;
}
