import app from "./app";
import Debug from "debug";

const port = process.env.PORT || 8000;

const devDebug = Debug('dev')

app.listen(port, () => {
    devDebug(`The server is running on port http://localhost:${port}`)
})