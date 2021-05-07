//import bcrypt from 'bcryptjs';
const data = {
    customers: [
        {
            first_name: 'Miss',
            last_name: 'Staff',
            username: 'M',
            email: 'shawnastaff@gmail.com',
            password: '4321', //bcrypt.hashSync('4321', 8),
            isAdmin: true
        },
        {
            first_name: 'John',
            last_name: 'Doe',
            username: 'JJ',
            email: 'user@example.com',
            password: '1234', //bcrypt.hashSync('1234', 8),
            isAdmin: false,
        },
    ],
};
export default data;