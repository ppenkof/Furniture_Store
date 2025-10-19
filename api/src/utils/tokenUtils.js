import jwt from 'jsonwebtoken';
import 'dotenv/config';


export const generateAuthToken = (user) =>{
    const payload = {   
        id: user.id,
        email: user.email
    }
// console.log(process.env.JWT_SECRET);
    const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '2h'});
// console.log(token);
    return token;
}