import bcrypt from 'bcryptjs';
const dataProd = {
    users: [
        {
            first_name: 'Miss',
            last_name: 'Staff',
            username: 'M',
            email: 'shawnastaff@gmail.com',
            password: bcrypt.hashSync('4321', 8),
            isAdmin: true
        },
        {
            first_name: 'John',
            last_name: 'Doe',
            username: 'JJ',
            email: 'user@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        },  
 
    ],
};
export default dataProd;