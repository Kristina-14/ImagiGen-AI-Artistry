import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js';

import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';

// dotenv.config() is used to pull all the environment variables from the .env file
dotenv.config();

const app = express(); //creating the object of express
app.use(cors()); //using some middleware
app.use(express.json({ limit: '50mb' }));

//creating api end points to connect.
app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);


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