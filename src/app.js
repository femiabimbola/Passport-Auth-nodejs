import express from 'express';
import routes from './routes'
import expressLayout from 'express-ejs-layouts'

const app = express();

app.get('/', (req, res) => {
    res.status(200).send(`The root application is live`)
});

app.use(expressLayout); // this has to be about the view engine
app.set('view engine', 'ejs');


app.use('/users', routes);

app.all('*', (req, res, next) => {
    res.status(404).send('Nothing here, check the documentation')
    next()
})



export default app;