import mongoose from 'mongoose';

export function userCreator(modelName = 'User') {
    const userSchema = mongoose.Schema({
        userName: { type: String, required: true, trim: true },
        password: { type: String, required: true },
        profileImg: { type: String },
        backImg: { type: String },
        profileText: { type: String },
        friends: [{ type: mongoose.Types.ObjectId, ref: 'User' }],
        enemies: [{ type: mongoose.Types.ObjectId, ref: 'User' }],
    });

    userSchema.set('toJSON', {
        transform: (document, returnedObject) => {
            delete returnedObject.__v;
            delete returnedObject.password;
        },
    });

    let User;
    if (mongoose.default.models[modelName]) {
        User = mongoose.model(modelName);
    } else {
        User = mongoose.model(modelName, userSchema);
    }
    return User;
}
