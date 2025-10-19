import { Router } from "express";
import userService from "../service/userService.js";

const userController = Router();

userController.post('/register', async (req, res) => {
    const { email, password } = req.body;
    console.log(email);
    console.log(password);
    const result = await userService.register(email, password);
    // Todo: Return data for login
    res.status(201).end();
});

export default userController;