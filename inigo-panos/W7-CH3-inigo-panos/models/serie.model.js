import mongoose from 'mongoose';

export function serieCreator(modelName = 'series') {
    const serieSchema = new mongoose.Schema({
        name: { type: String, required: true, unique: true },
        genre: { type: String, required: true },
        platform: { type: String, required: true },
    });

    serieSchema.set('toJSON', {
        transform: (document, returnedObject) => {
            delete returnedObject.__v;
        },
    });

    let Serie;
    if (mongoose.default.models[modelName]) {
        Serie = mongoose.model(modelName);
    } else {
        Serie = mongoose.model(modelName, serieSchema);
    }
    return Serie;
}
