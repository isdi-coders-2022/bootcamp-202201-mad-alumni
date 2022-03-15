import * as dotenv from 'dotenv';
dotenv.config();
import dataJSON from 'mongoose';
import mongoose from 'mongoose';

export async function mongoConnect() {
    const user = process.env.DBUSER;
    const password = process.env.DBPASSWORD;
    const dbName = process.env.DBNAME;
    const uri = `mongodb+srv://${user}:${password}@cluster0.btpje.mongodb.net/${dbName}?retryWrites=true&w=majority`;
    await mongoose.connect(uri);
    return mongoConnect;
}

export function robotsConnect(collection = 'robots') {
    mongoConnect().then(() => {});
    const robotSchema = new mongoose.Schema({
        name: String,
        image: String,
        speed: Number,
        strength: Number,
        date: String,
    });
    // robotSchema.methods.algo = function () {};
    const Robot = mongoose.model(collection, robotSchema);
    return Robot;
}

// export function install(collection = 'testingRobots') {
//     mongoConnect().then(() => {});
//     robotsConnect().then(() => {});
//     await testingRobots.dropCollection(collection);
//     const robotsCollection = dbCoders.collection(collection);
//     const result = await robotsCollection.insertMany(dataJSON.robots);
//     mongoConnect.close();
//     return result;
// }
