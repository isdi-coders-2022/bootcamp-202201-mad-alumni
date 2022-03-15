import mongoose from 'mongoose';

export function serieCreator(modelName = 'serie') {
    const userSchema = new mongoose.Schema({
        name: { type: String, required: true, unique: true },
        genre: { type: String, required: true },
        platform: { type: String, required: true },
    });

    userSchema.set('toJSON', {
        transform: (document, returnedObject) => {
            delete returnedObject.__v;
            delete returnedObject.passwd;
        },
    });

    let Serie;
    if (mongoose.default.models[modelName]) {
        Serie = mongoose.model(modelName);
    } else {
        Serie = mongoose.model(modelName, userSchema);
    }
    return Serie;
}
