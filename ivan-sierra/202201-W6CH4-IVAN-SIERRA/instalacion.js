import { mongoConnect } from "./base-datos.js";
import dataJSON from './tareas.js';

async function  install(){
    const collection = 'tasks';
    const {mongoClient, dbCoders} = await mongoConnect()
    console.log(collection);
    const tasksCollection = dbCoders.collection(collection)
    const result = await tasksCollection.insertMany(dataJSON.tasks)
    mongoClient.close();
    return result;
}
console.log(await install());