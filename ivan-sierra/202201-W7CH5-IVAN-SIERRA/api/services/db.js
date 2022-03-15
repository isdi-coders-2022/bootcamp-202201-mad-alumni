import * as dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';

import { userCreator } from '../models/user.model.js';

export async function mongoConnect() {
    const user = process.env.DBUSER;
    const password = process.env.DBPASSWD;
    let dbName;
    if (process.env.NODE_ENV === 'test') {
        dbName = process.env.TESTDBNAME;
    } else {
        dbName = process.env.DBNAME;
    }
    console.log('Connecting to', dbName);
    console.log(password);
    console.log(user);
    const uri = `mongodb+srv://${user}:${password}@cluster0.ojc5i.mongodb.net/${dbName}?retryWrites=true&w=majority`;
    console.log(uri);

    return mongoose.connect(uri);
}

export async function mongoDisconnect() {
    return mongoose.disconnect();
}

export async function installUsers(data, modelName = 'User') {
    const User = userCreator(modelName);
    const deleted = await User.deleteMany({});
    const result = await User.insertMany(data);
    return { result, deleted };
}
