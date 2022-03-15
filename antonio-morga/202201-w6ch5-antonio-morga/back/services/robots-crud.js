/* eslint-disable no-return-await */

export const getAllRobots = async (Robot) => await Robot.find({});

export const getRobot = async (id, Robot) => await Robot.findById(id);

export const insertRobot = async (RobotToAdd, Robot) => {
    const newRobot = new Robot(RobotToAdd);
    return await newRobot.save();
};

export const updateRobot = async (id, partialRobot, Robot) =>
    await Robot.findByIdAndUpdate(id, partialRobot, { new: true });

export const deleteRobot = async (id, Robot) =>
    await Robot.findByIdAndDelete(id);
