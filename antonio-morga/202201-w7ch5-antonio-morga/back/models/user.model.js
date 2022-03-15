/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import mongoose from 'mongoose';

export const userCreator = (modelName = 'User') => {
    const userSchema = mongoose.Schema({
        userName: {
            type: String,
            required: true,
            lowercase: true,
            minlength: 3,
        },
        password: {
            type: String,
            required: true,
        },
        birthDate: {
            type: String,
            required: true,
        },
        image: {
            type: String,
        },
        friends: [{ type: mongoose.Types.ObjectId, ref: 'User' }],
        enemies: [{ type: mongoose.Types.ObjectId, ref: 'User' }],
    });

    userSchema.set('toJSON', {
        transform: (document, returnedObject) => {
            delete returnedObject.password;
            delete returnedObject.__v;
        },
    });

    let User;
    if (mongoose.default.models[modelName]) {
        User = mongoose.model(modelName);
    } else {
        User = mongoose.model(modelName, userSchema, 'users');
    }
    return User;
};
