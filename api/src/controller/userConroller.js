import { Router } from "express";
import userService from "../service/userService.js";

const userController = Router();

userController.post('/register', async (req, res) => {
    const { email, password } = req.body;
    console.log(email);
    console.log(password);
    const result = await userService.register(email, password);
    // Todo: Return data for login
    res.status(201).json(result);
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

export default userController;