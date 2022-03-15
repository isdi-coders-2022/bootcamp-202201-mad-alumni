import { MongoClient } from 'mongodb';
import * as dotenv from 'dotenv';
dotenv.config();

export async function mongoConnect() {
    const { USERNAME, PASSWORD, DB_NAME } = process.env;
    const uri = `mongodb+srv://${USERNAME}:${PASSWORD}@test-cluster.iqlbh.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

    const mongoClient = new MongoClient(uri);
    const mongoConnection = await mongoClient.connect();
    const myDB = mongoConnection.db();
    return { mongoClient, myDB };
}

export async function thingsIKnowConnect(deployment) {
    const collection =
        deployment === 'Production' ? 'thingsIKnow' : 'thingsIKnow-dev';
    const { mongoClient, myDB } = await mongoConnect();
    const thingsIKnowCollection = myDB.collection(collection);
    return { thingsIKnowCollection, mongoClient };
}
