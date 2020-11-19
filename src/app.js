import express from 'express';
// import routes from './routes'

const app = express();

app.get('/', (req, res) => {
    res.status(200).send(`The root application is live`)
});

// app.use('/routes', routes);


export default app;