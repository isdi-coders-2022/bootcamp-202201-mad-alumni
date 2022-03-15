import * as dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';

export async function mongoConnect() {
    const user = process.env.DBUSER;
    const password = process.env.DBPASSWD;
    const dbName = process.env.DBNAME;
    const uri = `mongodb+srv://${user}:${password}@cluster0.piemq.mongodb.net/${dbName}?retryWrites=true&w=majority`;
    const mongooseConnect = await mongoose.connect(uri);
    return mongooseConnect;
}

export function robotsConnect(collection = 'robots') {
    mongoConnect().then();
    const robotSchema = new mongoose.Schema({
        name: String,
        image: String,
        speed: Number,
        endurance: Number,
        date: Number,
    });
    robotSchema.methods.algo = function () {};

    const Robot = mongoose.model(collection, robotSchema);
    return Robot;
}
