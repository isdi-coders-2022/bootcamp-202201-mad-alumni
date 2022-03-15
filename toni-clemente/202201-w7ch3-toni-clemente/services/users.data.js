import bcrypt from 'bcryptjs';

export const USERS = [
    {
        name: 'Juanito',
        passwd: bcrypt.hashSync('1234'),
    },
    {
        name: 'Pepito',
        passwd: bcrypt.hashSync('1234'),
    },
    {
        name: 'Antonio',
        passwd: bcrypt.hashSync('1234'),
    },
];
