import { Router } from "express";
import userService from "../service/userService.js";

const userController = Router();

userController.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const result = await userService.register(username, password);
    // Todo: Return data for login
    res.status(201).end();
});

export default userController;