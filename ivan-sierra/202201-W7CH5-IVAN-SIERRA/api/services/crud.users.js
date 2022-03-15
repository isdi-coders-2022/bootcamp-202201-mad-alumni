import { User } from '../models/user.model.js';
export async function insertItem(body, Item) {
    // const User = userCreator();
    const user = await User.findById(body.userItem);
    if (!user) {
        return null;
    }
    const savedItem = await Item.create(body);
    // const result = await newTask.save(); incluido en create
    user.items = [...user.items, savedItem.id];
    user.save();
    return savedItem;
}
