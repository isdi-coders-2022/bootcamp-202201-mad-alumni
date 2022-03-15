import * as dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';

export async function mongoConnect() {
    const user = process.env.DBUSER;
    const password = process.env.DBPASSWD;
    const dbName = process.env.DBNAME;
    const uri = `mongodb+srv://${user}:${password}@cluster0.89hok.mongodb.net/${dbName}?retryWrites=true&w=majority`;
    const mongooseConnect = await mongoose.connect(uri);
    return mongooseConnect;
}

export function robotsConnect(collection = 'robots') {
    mongoConnect().then(() => {});
    const robotSchema = new mongoose.Schema({
        Name: String,
        Speed: Number,
        Defense: Number,
        DateofCreation: Number,
        Img: String,
    });

    const Robot = mongoose.model(collection, robotSchema);
    return Robot;
}
