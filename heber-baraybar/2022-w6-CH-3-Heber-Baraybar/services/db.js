import { MongoClient } from 'mongodb';
import * as dotenv from 'dotenv';
dotenv.config();

export async function mongoConnect() {
    const user = process.env.DBUSER;
    const password = process.env.DBPASSWD;
    const dbName = process.env.DBNAME;
    const uri = `mongodb+srv://${user}:${password}@cluster0.zsntb.mongodb.net/${dbName}?retryWrites=true&w=majority`;

    const mongoClient = new MongoClient(uri);
    const mongoConnect = await mongoClient.connect();
    const myDb = mongoConnect.db();
    console.log(mongoClient, myDb);
    return { mongoClient, myDb };
}
export async function thingsConnect() {
    const collection = 'things';
    const { mongoClient, myDb } = await mongoConnect();
    const thingsCollection = myDb.collection(collection);
    return { mongoClient, thingsCollection };
}
