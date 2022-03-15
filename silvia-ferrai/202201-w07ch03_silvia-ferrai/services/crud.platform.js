import { Platform } from '../models/platform.model.js';

export async function getAllPlatform() {
    return await Platform.find({}).populate('series', {
        series: 0,
    });
}

export async function deletePlatform(id) {
    return await Platform.findByIdAndDelete(id);
}

export async function insertPlatform(body) {
    const newPlatform = Platform.create(body);
    return await newPlatform;
}
