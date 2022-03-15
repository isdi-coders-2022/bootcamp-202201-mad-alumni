import axios from 'axios';
import * as services from './auth';

jest.mock('axios');

describe('Given the auth services', () => {
    describe('When calling them', () => {
        test('They call axios', () => {
            services.login();
            expect(axios.post).toHaveBeenCalledTimes(1);

            services.register();
            expect(axios.post).toHaveBeenCalledTimes(2);

            services.loginToken();
            expect(axios.get).toHaveBeenCalled();
        });
    });
});
