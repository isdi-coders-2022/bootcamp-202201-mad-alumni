export async function getAllUsers(User) {
    return await User.find({}).populate('friends', {
        name: 1,
    });
}
export async function getFriends(id, User) {
    return await User.findById(id).populate('friends', {
        age: 0,
        friends: 0,
        enemies: 0,
    });
}

export async function getEnemies(id, User) {
    return await User.findById(id).populate('enemies', {
        age: 0,
        friends: 0,
        enemies: 0,
    });
}

export async function updateUser(id, partialUser, User) {
    return await User.findByIdAndUpdate(id, partialUser, {
        new: true,
    }).populate('friends', {
        name: 1,
        age: 1,
        profilePicture: 1,
    });
}
