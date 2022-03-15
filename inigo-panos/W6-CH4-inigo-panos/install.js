import { mongoConnect } from './db.js';
import dataJSON from './books.js';
import * as dotenv from 'dotenv';
dotenv.config();

export async function install() {
    const collection = 'books';
    const { mongoClient, dbCoders } = await mongoConnect();

    const booksCollection = dbCoders.collection(collection);
    const result = await booksCollection.insertMany(dataJSON.things);
    mongoClient.close();
    return result;
}

console.log(await install());
