import mongoose from 'mongoose';

const robotSchema = new mongoose.Schema({
    name: String,
    image: String,
    characteristics: {
        speed: Number,
        resistance: Number,
        created_at: Date,
    },
});

export const Robot = mongoose.model('robots', robotSchema);
