/* eslint-disable no-return-await */
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

export const mongoConnect = async () => {
    const user = process.env.DBUSER;
    const password = process.env.DBPASSWORD;
    const dbName =
        process.env.NODE_ENV === 'test'
            ? process.env.TEST_DBNAME
            : process.env.DBNAME;
    const uri = `mongodb+srv://${user}:${password}@cluster0.pauk1.mongodb.net/${dbName}?retryWrites=true&w=majority`;
    const mongooseConnect = await mongoose.connect(uri);
    return mongooseConnect;
};

export const robotsConnect = (collection = 'robots') => {
    mongoConnect();
    const robotSchema = mongoose.Schema({
        robotName: String,
        speed: Number,
        strength: Number,
        creationDate: String,
        img: String,
    });
    const Robot = mongoose.model(collection, robotSchema);
    return Robot;
};
