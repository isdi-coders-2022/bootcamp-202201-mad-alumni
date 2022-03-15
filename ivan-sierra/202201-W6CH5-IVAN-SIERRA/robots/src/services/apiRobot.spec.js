import axios from 'axios';
import * as api from './apiRobot';

jest.mock('axios');

describe('Testing removeRobot', () => {
  beforeEach(() => {
    const resp = [
      {
        _id: '621b677b9cef074b5659c21f',
        name: 'nevo',
        speed: 2222,
        resistance: 22323,
        creation_date: '0222-02-22T00:00:00.000Z',
        image:
          'https://www.zonaoutdoor.es/sites/default/files/ubtech_alpha_1p.jpg',
        __v: 0,
      },
    ];
    axios.delete.mockResolvedValue(resp);
  });

  test('The function to be used', () => {
    const resp = [
      {
        _id: '621b677b9cef074b5659c21f',
        name: 'nevo',
        speed: 2222,
        resistance: 22323,
        creation_date: '0222-02-22T00:00:00.000Z',
        image:
          'https://www.zonaoutdoor.es/sites/default/files/ubtech_alpha_1p.jpg',
        __v: 0,
      },
    ];
    return api.removeRobot().then((data) => {
      expect(data).toEqual(resp);
    });
  });
});

describe('Testing updateRobot', () => {
  beforeEach(() => {
    const resp = {
      _id: '621b677b9cef074b5659c21f',
      name: 'nevo',
      speed: 2222,
      resistance: 22323,
      creation_date: '0222-02-22T00:00:00.000Z',
      image:
        'https://www.zonaoutdoor.es/sites/default/files/ubtech_alpha_1p.jpg',
      __v: 0,
    };

    axios.patch.mockResolvedValue(resp);
  });

  test('The function to be used', () => {
    const resp = {
      _id: '621b677b9cef074b5659c21f',
      name: 'nevo',
      speed: 2222,
      resistance: 22323,
      creation_date: '0222-02-22T00:00:00.000Z',
      image:
        'https://www.zonaoutdoor.es/sites/default/files/ubtech_alpha_1p.jpg',
      __v: 0,
    };

    return api.updateRobot(resp).then((data) => {
      expect(data).toEqual(resp);
    });
  });
});

describe('Testing newRobot', () => {
  beforeEach(() => {
    const resp = [
      {
        _id: '621b677b9cef074b5659c21f',
        name: 'nevo',
        speed: 2222,
        resistance: 22323,
        creation_date: '0222-02-22T00:00:00.000Z',
        image:
          'https://www.zonaoutdoor.es/sites/default/files/ubtech_alpha_1p.jpg',
        __v: 0,
      },
    ];
    axios.post.mockResolvedValue(resp);
  });

  test('The function to be used', () => {
    const resp = [
      {
        _id: '621b677b9cef074b5659c21f',
        name: 'nevo',
        speed: 2222,
        resistance: 22323,
        creation_date: '0222-02-22T00:00:00.000Z',
        image:
          'https://www.zonaoutdoor.es/sites/default/files/ubtech_alpha_1p.jpg',
        __v: 0,
      },
    ];
    return api.newRobot().then((data) => {
      expect(data).toEqual(resp);
    });
  });
});

describe('Testing getAll', () => {
  beforeEach(() => {
    const resp = [
      {
        _id: '621b677b9cef074b5659c21f',
        name: 'nevo',
        speed: 2222,
        resistance: 22323,
        creation_date: '0222-02-22T00:00:00.000Z',
        image:
          'https://www.zonaoutdoor.es/sites/default/files/ubtech_alpha_1p.jpg',
        __v: 0,
      },
    ];
    axios.get.mockResolvedValue(resp);
  });

  test('The function to be used', () => {
    const resp = [
      {
        _id: '621b677b9cef074b5659c21f',
        name: 'nevo',
        speed: 2222,
        resistance: 22323,
        creation_date: '0222-02-22T00:00:00.000Z',
        image:
          'https://www.zonaoutdoor.es/sites/default/files/ubtech_alpha_1p.jpg',
        __v: 0,
      },
    ];
    return api.getAll().then((data) => {
      expect(data).toEqual(resp);
    });
  });
});

describe('Testing getRobot', () => {
  beforeEach(() => {
    const resp = [
      {
        _id: '621b677b9cef074b5659c21f',
        name: 'nevo',
        speed: 2222,
        resistance: 22323,
        creation_date: '0222-02-22T00:00:00.000Z',
        image:
          'https://www.zonaoutdoor.es/sites/default/files/ubtech_alpha_1p.jpg',
        __v: 0,
      },
    ];
    axios.get.mockResolvedValue(resp);
  });

  test('The function to be used', () => {
    const resp = [
      {
        _id: '621b677b9cef074b5659c21f',
        name: 'nevo',
        speed: 2222,
        resistance: 22323,
        creation_date: '0222-02-22T00:00:00.000Z',
        image:
          'https://www.zonaoutdoor.es/sites/default/files/ubtech_alpha_1p.jpg',
        __v: 0,
      },
    ];
    return api.getRobot().then((data) => {
      expect(data).toEqual(resp);
    });
  });
});
