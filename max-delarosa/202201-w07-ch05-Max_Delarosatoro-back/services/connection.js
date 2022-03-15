import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export async function mongoConnect() {
    const { DB_USER, DB_PASSWORD, DB_NAME } = process.env;
    const uri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@test-cluster.iqlbh.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;
    return mongoose.connect(uri);
}

export async function testMongoConnect() {
    const { DB_USER, DB_PASSWORD } = process.env;
    const DB_NAME = 'social-network-test';
    const uri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@test-cluster.iqlbh.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;
    return mongoose.connect(uri);
}
