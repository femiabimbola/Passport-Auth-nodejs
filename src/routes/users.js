import { Router } from "express";

const userRouter = Router();

userRouter.get('/login', (req, res) => {
    // res.status(200).send('login router')
    res.status(200).render('login')
});

userRouter.get('/register', (req, res) => {
    // res.status(200).send('Sign up router')
    res.status(200).render('register')
});

export default userRouter;