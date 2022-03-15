import { mongoConnect } from './db.js';
import dataJSON from './books.js';
import * as dotenv from 'dotenv';
dotenv.config();

async function install() {
    const collection = 'things';
    const { mongoClient, myDb } = await mongoConnect();

    const thingsCollection = myDb.collection(collection);

    const result = await thingsCollection.insertMany(dataJSON);
    mongoClient.close();
    return result;
}
console.log(await install());
