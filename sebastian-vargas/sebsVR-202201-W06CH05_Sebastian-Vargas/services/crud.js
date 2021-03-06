// import { robotsConnect } from './db.js';

export async function getAllRobots(Robot) {
    /* const { booksCollection, mongoClient } = await booksConnect();
    const cursor = booksCollection.find();
    const result = await cursor.toArray();
    mongoClient.close(); */
    return await Robot.find({});
}

export async function getRobot(id, Robot) {
    return await Robot.findById(id);
}

export async function insertRobot(robot, Robot) {
    const newRobot = new Robot(robot);

    return await newRobot.save();
}

export async function updateRobot(id, partialRobot, Robot) {
    return await Robot.findByIdAndUpdate(id, partialRobot, { new: true });
}

export async function deleteRobot(id, Robot) {
    return await Robot.findByIdAndDelete(id);
}
