import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import routes from "./routes/student";

const app = express();
const PORT = 3000;

//mongoose.Promise = global.Promise;
mongoose.connect( 'mongodb://127.0.0.1:27017' );

// Middlewares
app.use
(
    bodyParser.urlencoded({ extended: true })
)
app.use( bodyParser.json() );

routes( app );

app.listen
(
    PORT
    , () =>
    {
        console.log(`you are server is running on ${PORT}`);
    }
)