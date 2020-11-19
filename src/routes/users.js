import { Router } from "express";

const userRouter = Router();

userRouter.get('/login', (req, res) => {
    res.status(200).send('login router')
});

userRouter.get('/signin', (req, res) => {
    res.status(200).send('Sign up router')
});

export default userRouter;