import * as dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

dotenv.config();

export const mongoConnect = async () => {
    const user = process.env.DBUSER;
    const password = process.env.DBPASSWORD;
    const dbName = process.env.DBNAME;
    const uri = `mongodb+srv://${user}:${password}@cluster0.pauk1.mongodb.net/${dbName}?retryWrites=true&w=majority`;

    const mongoClient = new MongoClient(uri);
    const mongoConnection = await mongoClient.connect();
    const myDB = mongoConnection.db();

    return { mongoClient, myDB };
};

export const thingsTestConnect = async () => {
    const collection = 'thingsTesting';
    const { mongoClient, myDB } = await mongoConnect();
    const bookCollection = myDB.collection(collection);
    return { bookCollection, mongoClient };
};

export const thingsConnect = async () => {
    const collection = 'things i know';
    const { mongoClient, myDB } = await mongoConnect();
    const bookCollection = myDB.collection(collection);
    return { bookCollection, mongoClient };
};
