import { Router } from "express";
import User from "../../models/Users";
import bcrypt from 'bcryptjs'

const userRouter = Router();

userRouter.get('/login', (req, res) => {
    res.status(200).render('login')
});

userRouter.get('/register', (req, res) => {
    res.status(200).render('register')
});

userRouter.post('/register', (req, res) => {
    const { name, email, password, password2 } = req.body;

    let errors = [];

    // C
    if(!name || !email || !password || !password2 ) {   
        errors.push({ msg : 'Please fill in all fields'});
    } 

    if (password !== password2 ) {
        errors.push({ msg : "Password gotta match "});
    }

    if(password.length < 6) {
        errors.push({ msg : 'Password should be at least 6 characters'});
    }

    if ( errors.length > 0) {
        res.render('register', {
          errors, name, email, password, password2
        })
    }
    else {
        // Mongoose method is findOne
        User.findOne({ email: email})
        .then(user => {
            if (user ) {
                // if user exist
                errors.push({ msg: "Email is already registered"});
                res.render('register', {
                  errors, name, email, password, password2
                });
            } else {

            }
        })
    }
})


export default userRouter;