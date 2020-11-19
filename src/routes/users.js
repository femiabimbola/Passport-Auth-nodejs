import { Router } from "express";

const userRouter = Router();

userRouter.get('/user/login', (req, res) => {
    res.status(200).send('login router')
});

userRouter.get('/user/sign in', (req, res) => {
    res.status(200).send('Sign uo router')
});
