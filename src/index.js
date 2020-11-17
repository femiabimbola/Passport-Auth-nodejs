import express from 'express';
import Debug from "debug";

const App = express();
const port = process.env.PORT || 8000 ;

const devDebug = Debug('dev')

App.listen(port, () => {
    devDebug(`The server is running on port https://localhost:${port}`)
})