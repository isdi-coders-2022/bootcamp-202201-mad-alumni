import * as dotenv from 'dotenv';
dotenv.config();
import { MongoClient } from 'mongodb';

export async function mongoConnect() {
    const user = process.env.DBUSER;
    const password = process.env.DBPASSWD;
    const nameDb = process.env.DBNAME;
    const uri = `mongodb+srv://${user}:${password}@cluster0.mjbgi.mongodb.net/${nameDb}?retryWrites=true&w=majority`;
    console.log(uri);
    const mongoClient = new MongoClient(uri);
    const mongoConnect = await mongoClient.connect();
    const dbThings = mongoConnect.db();
    return { mongoClient, dbThings };
}

export async function thingsConnect() {
    const collection = 'things';
    const { mongoClient, dbThings } = await mongoConnect();
    const thingsCollection = dbThings.collection(collection);
    return { mongoClient, thingsCollection };
}
