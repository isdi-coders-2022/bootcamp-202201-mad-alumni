import * as dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';

export async function mongoConnect() {
    const user = process.env.DBUSER;
    const password = process.env.DBPASSWD;
    const dbName = process.env.DBNAME;
    const uri = `mongodb+srv://${user}:${password}@cluster0.mjbgi.mongodb.net/${dbName}?retryWrites=true&w=majority`;
    const mongooseConnect = mongoose.connect(uri);
    return mongooseConnect;
}

export function robotConnect(collection = 'robots') {
    mongoConnect();

    const robotSchema = new mongoose.Schema({
        name: String,
        speed: Number,
        resistance: Number,
        creation_date: Date,
        image: String,
    });

    const Robot = mongoose.model(collection, robotSchema);
    return Robot;
}
