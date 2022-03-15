import { ObjectID } from 'bson';
import books from './books.js';
import { thingsConnect } from './db.js';

export async function getAllClients() {
    const { thingsCollection, mongoClient } = await thingsConnect();
    const cursor = thingsCollection.find();
    const result = await cursor.toArray();
    mongoClient.close();
    return result;
}

export async function getThing(id) {
    const dbId = ObjectID(id);
    const { thingsCollection, mongoClient } = await thingsConnect();

    const result = await thingsCollection.findOne({ _id: dbId });
    mongoClient.close();
    return result;
}

export async function deleteThing(id) {
    const dbId = ObjectID(id);
    const { thingsCollection, mongoClient } = await thingsConnect();

    const result = await thingsCollection.findOneAndDelete({ _id: dbId });
    mongoClient.close();
    return result;
}

export async function addThing(id, partialThing) {
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

export async function insertThing(thing) {
    const { thingsCollection, mongoClient } = await thingsConnect();
    const result = await thingsCollection.insertOne(thing);
    mongoClient.close();
    return result;
}
