import User from '../model/User.js';
import bcrypt from 'bcrypt';

export default {
    register(email, password) {
       return User.create({email, password});
    },
    login(email, password) {    
        const user = User.findOne({email});

        if(!user){
            throw new Error('Invalid email or password');
        }

        const isValid = bcrypt.compare(password, user.password);

        if(!isValid){
            throw new Error('Invalid email or password');
        }

        return user;
    }
};