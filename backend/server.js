import express from 'express';  
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
const app = express();
app.use(express.json());
app.get('/' , (req , res)=>{
    res.send('threads madafaka');
})
const PORT = process.env.PORT || 5000;  
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}) ; 
