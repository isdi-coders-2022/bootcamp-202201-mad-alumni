// import { robotsConnect } from './db.js';

export async function getAllRobots(Robots) {
    return await Robots.find({});
}

export async function getRobots(id, Robots) {
    return await Robots.findById(id);
}

export async function insertRobots(robots, Robots) {
    const newRobots = new Robots(robots);

    return await newRobots.save();
}

export async function updateRobots(id, partialRobots, Robots) {
    return await Robots.findByIdAndUpdate(id, partialRobots, { new: true });
}

export async function deleteRobots(id, Robots) {
    return await Robots.findByIdAndDelete(id);
}
