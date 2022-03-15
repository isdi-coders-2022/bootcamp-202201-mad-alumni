import { mongoConnect } from './db.js';
import thingsJSON from './things.js';
import * as dotenv from 'dotenv';
dotenv.config();

async function install() {
    const collection = 'things';
    const { mongoClient, dbThings } = await mongoConnect();

    const thingsCollection = dbThings.collection(collection);
    const result = await thingsCollection.insertMany(thingsJSON.things);
    mongoClient.close();
    return result;
}

console.log(await install());
