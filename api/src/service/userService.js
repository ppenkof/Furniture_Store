import User from '../model/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import 'dotenv/config'

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

        const payload = {   
            id: user.id,
            email: user.email
        }

        const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '2h'});
        return {
            _id: user.id,
            email: user.email, 
            accessToken: token 
        };
    }
};