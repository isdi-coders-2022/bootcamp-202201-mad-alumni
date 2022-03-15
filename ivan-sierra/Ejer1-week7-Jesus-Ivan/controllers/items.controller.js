//import bcrypt from 'bcryptjs';
import { Item } from '../models/item.model.js';
import * as crud from '../services/crud-items.js';

export const getAllItems = async (req, res, next) => {
    try {
        const resp = await crud.insertItem(Item);
        res.json(resp);
    } catch (err) {
        next(err);
    }
};
export const insertItem = (req, res) => {
    crud.insertItem(req.body, Item).then((resp) => {
        res.json(resp);
    });
};
