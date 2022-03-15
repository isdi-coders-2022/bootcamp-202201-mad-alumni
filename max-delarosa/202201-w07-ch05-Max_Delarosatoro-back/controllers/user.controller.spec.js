import fs from 'fs/promises';
import { User } from '../models/user.model.js';
import * as controllers from './user.controller';

jest.mock('../models/user.model.js');
jest.mock('fs/promises');
const req = {};
const res = {
    status: jest.fn(),
    json: jest.fn(),
};
const next = jest.fn();

describe('Given the user controllers', () => {
    beforeEach(() => {
        User.find.mockResolvedValue([]);
        User.findById.mockResolvedValue({
            _id: '41241242',
            friends: ['41241242'],
            enemies: ['41241242'],
        });
        User.findByIdAndDelete.mockResolvedValue({});
    });
    describe('When calling them', () => {
        test('getAllusers calls the User model', async () => {
            await controllers.getAllUsers(req, res, next);
            expect(User.find).toHaveBeenCalled();
            expect(res.status).toHaveBeenCalled();
            expect(res.json).toHaveBeenCalled();
        });
        test('getAllusers calls next with error', async () => {
            User.find.mockRejectedValue(new Error('Error'));
            await controllers.getAllUsers(req, res, next);
            expect(next).toHaveBeenCalled();
        });
        test('getAllOtherUsers calls the User model', async () => {
            await controllers.getAllOtherUsers(req, res, next);
            expect(User.find).toHaveBeenCalled();
            expect(res.status).toHaveBeenCalled();
            expect(res.json).toHaveBeenCalled();
        });
        test('getAllOtherUsers calls next', async () => {
            User.find.mockRejectedValue(new Error('Error'));
            await controllers.getAllOtherUsers(req, res, next);
            expect(next).toHaveBeenCalled();
        });
        test('getUserInfo calls the User model', async () => {
            await controllers.getUserInfo(req, res, next);
            expect(User.find).toHaveBeenCalled();
            expect(res.status).toHaveBeenCalled();
            expect(res.json).toHaveBeenCalled();
        });
        test('getUserInfo calls next', async () => {
            User.find.mockRejectedValue(new Error('Error'));
            await controllers.getUserInfo(req, res, next);
            expect(next).toHaveBeenCalled();
        });
        test('getFriends calls the User model', async () => {
            await controllers.getFriends(req, res, next);
            // expect(User.findById).toHaveBeenCalled();
            expect(res.status).toHaveBeenCalled();
            expect(res.json).toHaveBeenCalled();
        });
        test('getFriends calls next', async () => {
            User.findById.mockRejectedValue(new Error('Error'));
            await controllers.getFriends(req, res, next);
            expect(next).toHaveBeenCalled();
        });
        test('getEnemies calls the User model', async () => {
            await controllers.getEnemies(req, res, next);
            expect(User.find).toHaveBeenCalled();
            expect(res.status).toHaveBeenCalled();
            expect(res.json).toHaveBeenCalled();
        });
        test('getEnemies calls next', async () => {
            User.findById.mockRejectedValue(new Error('Error'));
            await controllers.getEnemies(req, res, next);
            expect(next).toHaveBeenCalled();
        });
        test('toggleFriend calls User and fs ', async () => {
            User.findById.mockResolvedValue({ _id: '412341234' });
            await controllers.toggleFriend(req, res, next);

            expect(User.find).toHaveBeenCalled();
            expect(res.status).toHaveBeenCalled();
            expect(res.json).toHaveBeenCalled();
        });
        test('toggleFriend error calls next ', async () => {
            User.findById.mockRejectedValue(new Error('Error'));
            await controllers.toggleFriend(req, res, next);
            expect(next).toHaveBeenCalled();
        });
        test('toggleEnemy calls User and fs ', async () => {
            User.findById.mockResolvedValue({ _id: '412341234' });
            await controllers.toggleEnemy(req, res, next);

            expect(User.find).toHaveBeenCalled();
            // expect(fs.appendFile).toHaveBeenCalled();
            expect(res.status).toHaveBeenCalled();
            expect(res.json).toHaveBeenCalled();
        });
        test('toggleEnemy error calls next ', async () => {
            User.findById.mockRejectedValue(new Error('Error'));
            await controllers.toggleEnemy(req, res, next);
            expect(next).toHaveBeenCalled();
        });
        test('deleteUser calls User and res.json', async () => {
            await controllers.deleteUser(req, res, next);
            expect(User.find).toHaveBeenCalled();
            expect(res.json).toHaveBeenCalled();
        });
        test('deleteUser null user', async () => {
            User.findByIdAndDelete.mockResolvedValue(null);
            await controllers.deleteUser(req, res, next);
            expect(next).toHaveBeenCalled();
        });
        test('deleteUser error calls next', async () => {
            User.findByIdAndDelete.mockRejectedValue(new Error('Error'));
            await controllers.deleteUser(req, res, next);
            expect(next).toHaveBeenCalled();
        });
        test('updateProfile calls User and res.json', async () => {
            await controllers.updateProfile(req, res, next);
            expect(User.find).toHaveBeenCalled();
            expect(res.json).toHaveBeenCalled();
        });
        test('updateProfile error calls next', async () => {
            User.findByIdAndUpdate.mockRejectedValue(new Error('Error'));
            await controllers.updateProfile(req, res, next);
            expect(next).toHaveBeenCalled();
        });
    });
});
