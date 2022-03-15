import * as dotenv from 'dotenv';
dotenv.config();
import { MongoClient } from 'mongodb';

export async function mongoConnect() {
    const user = process.env.DBUSER;
    const password = process.env.DBPASSWD;
    const dbName = process.env.DBNAME;
    const uri = `mongodb+srv://${user}:${password}@cluster0.piemq.mongodb.net/${dbName}?retryWrites=true&w=majority`;

    const mongoClient = new MongoClient(uri);
    const mongoConnect = await mongoClient.connect();
    const dbCoders = mongoConnect.db();

    console.log({ mongoClient, dbCoders });

    return { mongoClient, dbCoders };
}

export async function thingsConnect() {
    const collection = 'books';
    const { mongoClient, dbCoders } = await mongoConnect();
    const thingsCollection = dbCoders.collection(collection);
    console.log(dbCoders.collection(collection));
    return { mongoClient, thingsCollection };
}
