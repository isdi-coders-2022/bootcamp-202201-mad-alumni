import * as dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';

export async function mongoConnect() {
    const user = process.env.DBUSER;
    const password = process.env.DBPASSWD;
    const dbName = process.env.DBNAME;
    const uri = `mongodb+srv://${user}:${password}@cluster0sebs.odlqk.mongodb.net/${dbName}?retryWrites=true&w=majority`;
    console.log(uri);
    const robotConnect = await mongoose.connect(uri);
    return robotConnect;
}

export function robotsConnect(collection = 'robots') {
    mongoConnect().then();
    const robotSchema = new mongoose.Schema({
        name: String,
        image: String,
        speed: Number,
        strength: Number,
        date: Number,
    });

    const Robots = mongoose.model(collection, robotSchema);

    return Robots;
}
