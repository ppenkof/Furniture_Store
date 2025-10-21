import { Router } from "express";
import { userService } from "../service/index.js";
import { get } from "mongoose";
import { getErrorMessage } from "../utils/errorUtils.js";

const userController = Router();

userController.post('/register', async (req, res) => {
    const { email, password } = req.body;
   try {
        const result = await userService.register(email, password);
        // Todo: Return data for login
        res.status(201).json(result);
   } catch (error) {
        //Extract error message
        res.status(400).json({ message: getErrorMessage(error) });
   }
    
});

userController.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const result = await userService.login(email, password);
        res.status(201).json(result);

    } catch (error) {
        //Extract error message
        res.status(401).json({ message: error.message });
    }
});

userController.get('/logout', (req, res) => {
    
    //todo invalidate token
    res.status(204).json({ok: true});
});

export default userController;