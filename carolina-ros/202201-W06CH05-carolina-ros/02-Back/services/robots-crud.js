export async function getAllRobots(Robot) {
    const result = await Robot.find({});
    return result;
}
export async function getRobot(id, Robot) {
    const result = await Robot.findById(id);
    return result;
}
export async function insertRobot(robot, Robot) {
    const newRobot = new Robot(robot);
    const result = await newRobot.save();
    return result;
}
export async function updateRobot(id, partialRobot, Robot) {
    return await Robot.findByIdAndUpdate(id, partialRobot, { new: true });
}
export async function deleteRobot(id, Robot) {
    return await Robot.findByIdAndDelete(id);
}
