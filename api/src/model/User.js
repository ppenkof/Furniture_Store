import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new Schema({
    email: {
        type: String, 
        required: [true, 'User email is required'],
    },
    password: {
        type: String, 
        required: [true, 'User password is required'],
        minLength: [6, 'Password should be at least 6 characters long'],
    },
});  

userSchema.pre('save', async function() {
    this.password = await bcrypt.hash(this.password, 12);

});

const User = model('User', userSchema); 

export default User;
