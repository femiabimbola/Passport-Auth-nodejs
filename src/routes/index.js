import express from 'express';
import usersRoutes from './users';

const defaultRouter = express.Router();

defaultRouter.get('/', (req, res) => {
    res.status(200).render('welcome')
});

defaultRouter.use('/', usersRoutes)

export default defaultRouter;