import axios from 'axios';
import * as services from './apiRequest';

jest.mock('axios');

describe('Given the user services', () => {
    describe('When calling them', () => {
        test('They call axios', () => {
            services.loadUsers();
            expect(axios.get).toHaveBeenCalledTimes(1);

            services.updateProfile();
            expect(axios.patch).toHaveBeenCalled();

            services.toggleFriend();
            expect(axios.get).toHaveBeenCalledTimes(2);

            services.toggleEnemy();
            expect(axios.get).toHaveBeenCalledTimes(3);
        });
    });
});
