import e, { Router } from "express";

const userController = Router();

userController.post('/register', (req, res) => {
    const { username, password } = req.body;
    
    res.end();
});

export default userController;