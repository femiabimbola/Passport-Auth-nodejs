import express from 'express';
import Debug from "debug";

const app = express();
const port = process.env.PORT || 8000 ;

const devDebug = Debug('dev')

app.get('/', (req, res) => {
    res.status(200).send(`The root application is live`)
})

app.use('/routes', (req, use) => {
    res.status(200).send("routes index")
})


app.listen(port, () => {
    devDebug(`The server is running on port http://localhost:${port}`)
})