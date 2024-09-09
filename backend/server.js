import express from 'express';  
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import userRouter from './routes/userRouter.js';

dotenv.config();

const app = express();
app.use(express.json());
app.get('/' , (req , res)=>{
    res.send('threads madafaka');
})

// db connect env
const uri = process.env.URL; 
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

// routes
app.use('/api/v1/user', userRouter);

const PORT = process.env.PORT || 5000;  
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});