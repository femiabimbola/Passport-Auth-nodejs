import express from 'express';
import routes from './routes'
import expressLayout from 'express-ejs-layouts';
import mongoose from 'mongoose';
import  db  from '../config';
import Debug from 'debug';
import flash from "connect-flash";
import session, { Session } from 'express-session';

const app = express();

app.use(expressLayout); // this has to be about the view engine
app.set('view engine', 'ejs');

//Bodypaser
//Extended is false because req.body will give info
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Express session
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

// Connect Flash
app.use(flash());
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    next();
});


app.get('/', (req, res) => {
    res.status(200).send(`The root application is live`)
});
app.use('/users', routes);

const devDebug = Debug('dev');

 mongoose.connect(db.MongoURI, { useNewUrlParser: true,  useUnifiedTopology: true })
 .then(() => devDebug('Mongodb connected....'))
 .catch(err => devDebug(err));


app.all('*', (req, res, next) => {
    res.status(404).send('Nothing here, check the documentation')
    next()
})



export default app;