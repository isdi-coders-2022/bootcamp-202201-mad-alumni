import { thingsConnect } from './db.js';
import { ObjectId } from 'mongodb';

export async function getAllThings() {
    const { thingsCollection, mongoClient } = await thingsConnect();
    const cursor = thingsCollection.find();
    const result = await cursor.toArray();
    mongoClient.close();
    return result;
}

export async function getThings(id) {
    const dbId = ObjectId(id);
    const { thingsCollection, mongoClient } = await thingsConnect();
    const result = await thingsCollection.findOne({ _id: dbId });
    mongoClient.close();
    return result;
}

export async function insertThings(things) {
    const { thingsCollection, mongoClient } = await thingsConnect();
    const result = await thingsCollection.insertOne(things);
    mongoClient.close();
    return result;
}

export async function updateThings(id, partialThings) {
    const dbId = ObjectId(id);
    const { thingsCollection, mongoClient } = await thingsConnect();
    const result = await thingsCollection.findOneAndUpdate(
        { _id: dbId },
        {
            $set: { ...partialThings },
        }
    );
    mongoClient.close();
    return result;
}

export async function deleteThings(id) {
    const dbId = ObjectId(id);
    const { thingsCollection, mongoClient } = await thingsConnect();
    const result = await thingsCollection.findOneAndDelete({ _id: dbId });
    mongoClient.close();
    return result;
}
