import { thingsConnect } from './db.js';
import { ObjectId } from 'mongodb';

export async function getAllthings() {
    const { thingsCollection, mongoClient } = await thingsConnect();
    const cursor = thingsCollection.find();
    const result = await cursor.toArray();
    mongoClient.close();
    return result;
}

export async function getThing(id) {
    const dbId = ObjectId(id);
    const { thingsCollection, mongoClient } = await thingsConnect();
    const result = await thingsCollection.findOne({ _id: dbId });
    mongoClient.close();
    return result;
}

export async function insertThing(book) {
    const { thingsCollection, mongoClient } = await thingsConnect();
    const result = await thingsCollection.insertOne(book);
    mongoClient.close();
    return result;
}

export async function updateThing(id, partialThing) {
    const dbId = ObjectId(id);
    const { thingsCollection, mongoClient } = await thingsConnect();
    const result = await thingsCollection.findOneAndUpdate(
        { _id: dbId },
        {
            $set: { ...partialThing },
        }
    );
    mongoClient.close();
    return result;
}

export async function deleteThing(id) {
    const dbId = ObjectId(id);
    const { thingsCollection, mongoClient } = await thingsConnect();
    const result = await thingsCollection.findOneAndDelete({ _id: dbId });
    mongoClient.close();
    return result;
}
