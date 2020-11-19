import express from 'express';

const defaultRouter = express.Router();

defaultRouter.get('/', (req, res) => {
    res.status(200).send('Welcome to the default route')
});

export default defaultRouter;