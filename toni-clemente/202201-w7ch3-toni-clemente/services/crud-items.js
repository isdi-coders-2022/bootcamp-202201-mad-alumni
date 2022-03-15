// import { tasksConnect} from './db.js';

export async function getAllItems(Item) {
    /* const { booksCollection, mongoClient } = await booksConnect();
    const cursor = booksCollection.find();
    const result = await cursor.toArray();
    mongoClient.close(); */
    return await Item.find({});
}
