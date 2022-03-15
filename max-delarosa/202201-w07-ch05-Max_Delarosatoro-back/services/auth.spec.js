import { User } from '../models/user.model.js';
import * as authService from './auth.js';

jest.mock('../models/user.model.js');

describe('Given the auth module', () => {
    describe('When findUser is called', () => {
        test('It should call User.findOne', () => {
            authService.findUser({ id: 1 });
            expect(User.findOne).toHaveBeenCalled();
        });
    });
    describe('When findByUserId is called', () => {
        test('It should call User.findOne', () => {
            authService.findUserById(1);
            expect(User.findById).toHaveBeenCalled();
        });
    });
    describe('When findByUserId is called', () => {
        test('It should call User.findOne', () => {
            authService.addUser({ id: 2 });
            expect(User.create).toHaveBeenCalled();
        });
    });
});
