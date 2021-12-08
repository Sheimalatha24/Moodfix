import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import loginRoutes from './routes/login.js';
import userRoutes from './routes/user.js';
connectDB()
dotenv.config()

const app=express()

app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

app.use('/login',loginRoutes); 
app.use('/users',userRoutes);

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`App is running in ${process.env.NODE_ENV} mode on port ${PORT}`))