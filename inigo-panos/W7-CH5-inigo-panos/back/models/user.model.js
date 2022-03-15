import mongoose from 'mongoose';

export function userCreator(modelName = 'User') {
    const userSchema = new mongoose.Schema({
        userName: { type: String, required: true },
        password: { type: String, required: true },
        profileImage: { type: String, required: true },
        // friends: [
        //     {
        //         type: mongoose.Types.ObjectId,
        //         ref: 'User',
        //     },
        // ],
        // enemies: [
        //     {
        //         type: mongoose.Types.ObjectId,
        //         ref: 'User'
        //     }
        // ]}
    });
    userSchema.set('toJSON', {
        transform: (document, returnedObject) => {
            delete returnedObject.__v;
            delete returnedObject.passwd;
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

export const User = userCreator();
