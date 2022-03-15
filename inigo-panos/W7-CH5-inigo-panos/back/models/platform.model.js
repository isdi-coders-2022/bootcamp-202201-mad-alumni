import mongoose from 'mongoose';

const modelName = 'Platform';

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    pricePerMonth: { type: Number, required: true },
    series: [{ type: mongoose.Types.ObjectId, ref: 'Serie' }],
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
