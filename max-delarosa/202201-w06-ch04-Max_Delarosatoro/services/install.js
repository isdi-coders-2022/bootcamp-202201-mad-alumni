import { mongoConnect } from './db.js';
import data from './data.js';

async function install() {
    const collection = 'thingsIKnow-dev';
    const { mongoClient, myDB } = await mongoConnect();
    const thingsIKnowCollection = myDB.collection(collection);

    const result = await thingsIKnowCollection.insertMany(data.thingsIKnow);
    mongoClient.close();
    return result;
}

console.log(await install());
