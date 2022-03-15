

export async function getAllRobots(Robot) {

    return await Robot.find({});
}

export async function getRobot(id, Robot) {

    return await Robot.findById(id);
}

export async function addRobot(robot, Robot) {

    const newRobot = new Robot(robot);
    newRobot.algo();
    return await newRobot.save();
}

export async function updateRobot(id, partialRobot, Robot) {

    return await Robot.findByIdAndUpdate(id, partialRobot, { new: true });
}

export async function deleteRobot(id, Robot) {

    return await Robot.findByIdAndDelete(id);
}
