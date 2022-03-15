import { thingsIKnowConnect } from './db.js';
import { ObjectId } from 'mongodb';

export async function getAllthingsIKnow(deployment) {
    const { thingsIKnowCollection, mongoClient } = await thingsIKnowConnect(
        deployment
    );
    const cursor = thingsIKnowCollection.find();
    const result = await cursor.toArray();
    mongoClient.close();
    return result;
}

export async function getThingIKnow(id, deployment) {
    const dbId = ObjectId(id);
    const { thingsIKnowCollection, mongoClient } = await thingsIKnowConnect(
        deployment
    );
    const thingIKnow = await thingsIKnowCollection.findOne({ _id: dbId });
    mongoClient.close();
    return thingIKnow;
}

export async function addThingIKnow(thingIKnow, deployment) {
    const { thingsIKnowCollection, mongoClient } = await thingsIKnowConnect(
        deployment
    );
    const result = await thingsIKnowCollection.insertOne(thingIKnow);
    mongoClient.close();
    return result;
}

export async function updateThingIKnow(id, partialThingIKnow, deployment) {
    const dbId = ObjectId(id);
    const { thingsIKnowCollection, mongoClient } = await thingsIKnowConnect(
        deployment
    );
    const result = await thingsIKnowCollection.findOneAndUpdate(
        { _id: dbId },
        { $set: { ...partialThingIKnow } }
    );
    mongoClient.close();
    return result;
}

export async function removeThingIKnow(id, deployment) {
    const dbId = ObjectId(id);
    const { thingsIKnowCollection, mongoClient } = await thingsIKnowConnect(
        deployment
    );
    const result = await thingsIKnowCollection.findOneAndDelete({ _id: dbId });
    mongoClient.close();
    return result;
}
