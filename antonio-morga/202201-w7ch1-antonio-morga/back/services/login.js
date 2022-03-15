import bcrypt from 'bcryptjs';

const users = [
    {
        userName: 'pepe',
        password:
            '$2a$10$9w3ZSTuy2ax7UkT0uQx7f.3141JYqLsl0fk53o5qBUULOQ2nCGiTq',
    },
    { userName: 'soler', password: 'solermola24' },
    { userName: 'joaquin', password: 'joaquinmola24' },
    { userName: 'cris', password: 'crismola24' },
];

export const isUser = (user) =>
    users.some(
        (item) =>
            user.name === item.userName &&
            bcrypt.compareSync(user.password, item.password)
    );
