import { Robot } from '../models/robots.js';
import { mongoConnect } from './connection.js';

export async function getAllRobots() {
    await mongoConnect();
    return Robot.find({});
}

export async function getRobot(id) {
    await mongoConnect();
    return Robot.findById(id);
}

export async function addRobot(robot) {
    await mongoConnect();
    const newRobot = new Robot(robot);
    return newRobot.save();
}

export async function updateRobot(id, partialRobot) {
    await mongoConnect();
    return Robot.findByIdAndUpdate(id, partialRobot, { new: true });
}

export async function deleteRobot(id) {
    await mongoConnect();
    return Robot.findByIdAndDelete(id);
}
