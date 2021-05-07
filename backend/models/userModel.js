import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    username: { type: String, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, reqired: true },
    isAdmin: { type: Boolean, default: false, req: true }
},
    {
        timestamps: true
    }
);

const User = mongoose.model('Users', userSchema);

export default User;