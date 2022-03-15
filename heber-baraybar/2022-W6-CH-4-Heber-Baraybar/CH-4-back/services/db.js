import * as dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';

export async function mongoConnect() {
    const user = process.env.DBUSER;
    const password = process.env.DBPASSWD;
    const dbName = process.env.DBNAME;
    const uri = `mongodb+srv://${user}:${password}@cluster0.zsntb.mongodb.net/${dbName}?retryWrites=true&w=majority`;
    // const mongoClient = new MongoClient(uri);
    // const mongoConnect = await mongoClient.connect();
    // const dbCoders = mongoConnect.db();
    const mongooseConnect = await mongoose.connect(uri);
    return mongooseConnect;
}

/* export async function install(collection = 'books') {
    const { mongoClient, dbCoders } = await mongoConnect();
    await dbCoders.dropCollection(collection);
    const booksCollection = dbCoders.collection(collection);
    const result = await booksCollection.insertMany(dataJSON.books);
    mongoClient.close();
    return result;
} */

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
