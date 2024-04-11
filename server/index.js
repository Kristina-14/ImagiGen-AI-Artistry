import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js';

// dotenv.config() is used to pull all the environment variables from the .env file
dotenv.config();

const app = express(); //creating the object of express
app.use(cors()); //using some middleware
app.use(express.json({ limit: '50mb' }));

app.get('/', async(req, res) =>{
    res.send('Hello from ImagiGen!!');
});

const startServer = async () => {
    try{
        connectDB(process.env.MONGODB_URL); //connecting to the database
        app.listen(8000, () => console.log('Server started at port:8000'));
    }
    catch (error){
        console.log(error);
    }
}

startServer();