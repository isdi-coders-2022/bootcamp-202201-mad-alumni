import { store } from './store';

describe('Given the store', () => {
    describe('When declared', () => {
        test('It should call on configureStore', () => {
            expect(store.dispatch).toBeDefined();
            expect(store.subscribe).toBeDefined();
            expect(store.getState).toBeDefined();
        });
    });
});
