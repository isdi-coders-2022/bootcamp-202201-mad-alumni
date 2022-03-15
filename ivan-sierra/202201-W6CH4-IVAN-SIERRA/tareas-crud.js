import { tasksConnect } from './base-datos.js';
import { ObjectId } from 'mongodb';

export async function getAllTasks() {
    const { tasksCollection, mongoClient } = await tasksConnect();
    const cursor = tasksCollection.find();
    const result = await cursor.toArray();
    mongoClient.close();
    return result;
}

export async function getTask(id) {
    const dbId = ObjectId(id);
    const { tasksCollection, mongoClient } = await tasksConnect();
    const result = await tasksCollection.findOne({ _id: dbId });
    mongoClient.close();
    return result;
}

export async function insertTask(task) {
    const { tasksCollection, mongoClient } = await tasksConnect();
    const result = await tasksCollection.insertOne(task);
    mongoClient.close();
    return result;
}

export async function updateTask(id, partialTask) {
    const dbId = ObjectId(id);
    const { tasksCollection, mongoClient } = await tasksConnect();
    const result = await tasksCollection.findOneAndUpdate(
        { _id: dbId },
        {
            $set: { ...partialTask },
        }
    );
    mongoClient.close();
    return result;
}

export async function deleteTask(id) {
    const dbId = ObjectId(id);
    const { tasksCollection, mongoClient } = await tasksConnect();
    const result = await tasksCollection.findOneAndDelete({ _id: dbId });
    mongoClient.close();
    return result;
}