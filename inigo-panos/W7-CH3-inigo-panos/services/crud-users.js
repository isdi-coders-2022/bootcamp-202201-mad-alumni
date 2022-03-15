// import { tasksConnect} from './db.js';

export async function LoginUser(id, Item) {
    /*  const dbId = ObjectId(id);
    const { booksCollection, mongoClient } = await booksConnect();
    const result = await booksCollection.findOne({ _id: dbId });
    mongoClient.close(); */
    return await Item.findById(id);
}

// export async function registertUser(item, Item) {
//     /* const { booksCollection, mongoClient } = await booksConnect();
//     const result = await booksCollection.insertOne(book);
//     mongoClient.close(); */
//     const newUser = new User(user);
//     newUser.algo();
//     return await newUser.save();
// }
