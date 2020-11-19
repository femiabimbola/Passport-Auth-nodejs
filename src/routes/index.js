import express from 'express';
import usersRoutes from './users';

const defaultRouter = express.Router();

defaultRouter.get('/', (req, res) => {
    res.status(200).send('Welcome to the default route')
});

defaultRouter.use('/', usersRoutes)

export default defaultRouter;