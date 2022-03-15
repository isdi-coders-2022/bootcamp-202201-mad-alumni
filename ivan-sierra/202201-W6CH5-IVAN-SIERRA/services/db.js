import * as dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';

export async function mongoConnect() {
    const user = process.env.DBUSER;
    const password = process.env.DBPASSWD;
    const dbName = process.env.DBNAME;
    const uri = `mongodb+srv://${user}:${password}@cluster0.ojc5i.mongodb.net/${dbName}?retryWrites=true&w=majority`;

    const mongooseConnect = await mongoose.connect(uri);
    return mongooseConnect;
}

export async function installRobots(data, collection = 'robots') {
    const { Robot, connection } = await robotsConnect(collection);
    const deleted = await Robot.deleteMany({});

    const result = await Robot.insertMany(data);
    connection.disconnect();
    return { result, deleted };
}

export async function robotsConnect(collection = 'robots') {

    await mongoConnect();
    const robotSchema = new mongoose.Schema({
        title: String,
        type: String,
        status: Boolean,
    });
    robotSchema.methods.algo = function () {};

    let Robot;
    if (mongoose.default.models[collection]) {
        Robot = mongoose.model(collection);
    } else {
        Robot = mongoose.model(collection, robotSchema);
    }
    return { Robot };
}
