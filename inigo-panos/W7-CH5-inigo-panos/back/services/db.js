import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config();

export async function mongoConnect() {
    const userName = process.env.DBUSER;
    const password = process.env.DBPASSW;
    let dbName;
    if (process.env.NODE_ENV === 'test') {
        dbName = process.env.DBNAMETEST;
    } else {
        dbName = process.env.DBNAME;
    }

    const uri = `mongodb+srv://${userName}:${password}@cluster0.piemq.mongodb.net/${dbName}?retryWrites=true&w=majority`;
    console.log(uri);
    const mongooseConnect = await mongoose.connect(uri);
    return mongooseConnect;
}

export async function mongoDisconnect() {
    return mongoose.disconnect();
}
