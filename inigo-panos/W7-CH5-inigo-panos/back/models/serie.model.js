import mongoose from 'mongoose';

const modelName = 'Serie';

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    genre: { type: String, required: true },
    platform: { type: mongoose.Types.ObjectId, ref: 'Platform' },
});

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        delete returnedObject.__v;
    },
});

let User;
if (mongoose.default.models[modelName]) {
    User = mongoose.model(modelName);
} else {
    User = mongoose.model(modelName, userSchema);
}
export default User;
