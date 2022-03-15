import { ObjectId } from 'mongodb';
import { thingsConnect, thingsTestConnect } from './db.js';

// getAllBooks

export const getAllTIK = async () => {
    const { bookCollection, mongoClient } = await thingsConnect();
    const cursor = bookCollection.find();
    const data = await cursor.toArray();
    mongoClient.close();
    return data;
};
export const getAllTIKTest = async () => {
    const { bookCollection, mongoClient } = await thingsTestConnect();
    const cursor = bookCollection.find();
    const data = await cursor.toArray();
    mongoClient.close();
    return data;
};

// getBook

export const getTIK = async (id) => {
    const dbId = ObjectId(id);
    const { bookCollection, mongoClient } = await thingsConnect();
    const data = await bookCollection.findOne({ _id: dbId });
    mongoClient.close();
    return data;
};
export const getTIKTest = async (id) => {
    const dbId = ObjectId(id);
    const { bookCollection, mongoClient } = await thingsTestConnect();
    const data = await bookCollection.findOne({ _id: dbId });
    mongoClient.close();
    return data;
};

// insertBook

export const insertTIK = async (TIK) => {
    const { bookCollection, mongoClient } = await thingsConnect();
    const data = await bookCollection.insertOne(TIK);
    mongoClient.close();
    return data;
};
export const insertTIKTest = async (TIK) => {
    const { bookCollection, mongoClient } = await thingsTestConnect();
    const data = await bookCollection.insertOne(TIK);
    mongoClient.close();
    return data;
};

// updateBook

export const updateTIK = async (id, TIK) => {
    const { bookCollection, mongoClient } = await thingsConnect();
    const data = await bookCollection.findOneAndUpdate(
        { _id: ObjectId(id) },
        { $set: { ...TIK } }
    );
    mongoClient.close();
    return data;
};
export const updateTIKTest = async (id, TIK) => {
    const { bookCollection, mongoClient } = await thingsTestConnect();
    const data = await bookCollection.findOneAndUpdate(
        { _id: ObjectId(id) },
        { $set: { ...TIK } }
    );
    mongoClient.close();
    return data;
};

// deleteBook

export const deleteTIK = async (id) => {
    const { bookCollection, mongoClient } = await thingsConnect();
    const data = await bookCollection.findOneAndDelete({ _id: ObjectId(id) });
    mongoClient.close();
    return data;
};
export const deleteTIKTest = async (id) => {
    const { bookCollection, mongoClient } = await thingsTestConnect();
    const data = await bookCollection.findOneAndDelete({ _id: ObjectId(id) });
    mongoClient.close();
    return data;
};
