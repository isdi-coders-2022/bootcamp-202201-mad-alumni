import * as dotenv from 'dotenv';
dotenv.config();
import { MongoClient } from 'mongodb';

export async function mongoConnect(){
    const user = process.env.DBUSER;
    const password = process.env.DBPASSWD;
    const name = process.env.DBNAME;
    const uri = `mongodb+srv://${user}:${password}@cluster0.ojc5i.mongodb.net/${name}?retryWrites=true&w=majority`
    const mongoClient = new MongoClient(uri)
    const mongoConnect = await mongoClient.connect()
    const dbCoders = mongoConnect.db();
    
    return { mongoClient, dbCoders}
}

export async function tasksConnect(){
    const collection = 'tasks';
    const {mongoClient, dbCoders} = await mongoConnect();
    const tasksCollection = dbCoders.collection(collection)
    return { mongoClient, tasksCollection}; 
}