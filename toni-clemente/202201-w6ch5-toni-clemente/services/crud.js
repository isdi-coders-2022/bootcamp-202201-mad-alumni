// import { tasksConnect} from './db.js';

export async function getAllRobots(Robot) {
    /* const { booksCollection, mongoClient } = await booksConnect();
    const cursor = booksCollection.find();
    const result = await cursor.toArray();
    mongoClient.close(); */
    return await Robot.find({});
}

export async function getRobot(id, Robot) {
    /*  const dbId = ObjectId(id);
    const { booksCollection, mongoClient } = await booksConnect();
    const result = await booksCollection.findOne({ _id: dbId });
    mongoClient.close(); */
    return await Robot.findById(id);
}

export async function insertRobot(robot, Robot) {
    /* const { booksCollection, mongoClient } = await booksConnect();
    const result = await booksCollection.insertOne(book);
    mongoClient.close(); */
    const newRobot = new Robot(robot);
    newRobot.algo();
    return await newRobot.save();
}

export async function updateRobot(id, partialRobot, Robot) {
    /* const dbId = ObjectId(id);
    const { booksCollection, mongoClient } = await booksConnect();
    const result = await booksCollection.findOneAndUpdate(
        { _id: dbId },
        {
            $set: { ...partialBook },
        }
    );
    mongoClient.close(); */
    return await Robot.findByIdAndUpdate(id, partialRobot, { new: true });
}

export async function deleteRobot(id, Robot) {
    /* const dbId = ObjectId(id);
    const { booksCollection, mongoClient } = await booksConnect();
    const result = await booksCollection.findOneAndDelete({ _id: dbId });
    mongoClient.close(); */
    return await Robot.findByIdAndDelete(id);
}
