import { ObjectId } from 'mongodb';

export const mockUserList = [
    {
        userName: 'Pepe',
        password:
            '$2a$10$kPID6AlodnCvS5J/MDwuWOrtEbH0s2ca0Z6ZemqN4nTufIjhFwurG',
        birthDate: '2022-02-27',
        image: 'image',
        friends: [],
        enemies: [],
    },
    {
        userName: 'Soler',
        password:
            '$2a$10$lbxlzsU54U2SQ6hvcGecMuGrcQI57NRghK.piu4isoz8z20GqoWKa',
        birthDate: '2022-02-27',
        image: 'image',
        friends: [],
        enemies: [],
    },
    {
        userName: 'Antonio',
        password:
            '$2a$10$lbxlzsU54U2SQ6hvcGecMuGrcQI57NRghK.piu4isoz8z20GqoWKa',
        birthDate: '2022-02-27',
        image: 'image',
        friends: [],
        enemies: [],
    },
];

export const mockUser = {
    userName: 'Cris',
    password: '1234',
    birthDate: '2022-02-27',
    image: 'image',
    friends: [],
    enemies: [],
};
export const mockUserReturned = {
    _doc: {
        _id: ObjectId('62234fbc1776919ae3984c70'),
        userName: 'pepito',
        password:
            '$2a$10$bkpEjjw65nNTqmBq2aA8RuvgwAzcjtSY4FVcGcDFV1S1Abcy2WcH6',
        birthDate: '2022-02-27',
        image: 'asjkflgsa',
    },
};
