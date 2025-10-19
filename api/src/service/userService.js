import User from '../model/User.js';

export default {
    register(email, password) {
       return User.create({email, password});
    }
};