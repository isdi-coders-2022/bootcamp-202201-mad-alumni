import bcrypt from 'bcryptjs';
export const USERS = [
    { name: 'jesus', passwd: bcrypt.hashSync('12345') },
    { name: 'juan', passwd: bcrypt.hashSync('4321') },
];
