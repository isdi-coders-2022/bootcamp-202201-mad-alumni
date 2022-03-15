export async function getAllRobots(Robot) {
    return await Robot.find({});
}

export async function getRobot(id, Robot) {
    return await Robot.findById(id);
}
export async function insertRobot(robot, Robot) {
    const newRobot = new Robot(robot);

    return await newRobot.save();
}

export async function updateRobot(id, partialInfo, Robot) {
    return await Robot.findByIdAndUpdate(id, partialInfo, { new: true });
}

export async function deleteRobot(id, Robot) {
    return await Robot.findByIdAndDelete(id);
}
