/* eslint-disable no-return-await */
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { userCreator } from '../models/user.model.js';
import { mockUserList } from '../test-utils/test-users.js';

dotenv.config();

export const mongoConnect = async () => {
    const user = process.env.DBUSER;
    const password = process.env.DBPASSWORD;
    let dbName = '';
    if (process.env.NODE_ENV === 'test') {
        dbName = process.env.TEST_DBNAME;
    } else if (process.env.NODE_ENV === 'dev') {
        dbName = process.env.DEV_DBNAME;
    } else dbName = process.env.DBNAME;
    const uri = `mongodb+srv://${user}:${password}@cluster0.pauk1.mongodb.net/${dbName}?retryWrites=true&w=majority`;
    return await mongoose.connect(uri);
};

export const install = () => {
    const User = userCreator();
    User.collection.drop();
    return User.insertMany(mockUserList, { rawResult: true });
};
