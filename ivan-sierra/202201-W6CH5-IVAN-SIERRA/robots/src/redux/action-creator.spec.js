import * as action from './action-creator';

describe('Test function creators of actions', () => {
  test('Testing action-create', () => {
    expect(action.create()).toBeDefined();
  });

  test('Testing action-load', () => {
    expect(action.load()).toBeDefined();
  });

  test('Testing action-remove', () => {
    expect(action.remove()).toBeDefined();
  });

  test('Testing action-update', () => {
    expect(action.update()).toBeDefined();
  });
});
