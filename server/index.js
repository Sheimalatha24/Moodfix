
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import ploginRoutes from './routes/login.js';
import registerRoutes from './routes/register.js';
import dloginRoutes from './routes/dlogin.js';
import userRoutes from './routes/user.js';
import doctorRoutes from './routes/doctor.js';
import probroutes from './routes/prob.js';
import afterconsultroutes from './routes/afterconsult.js';
connectDB()
dotenv.config()

const app=express()

app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());
// app.use(express.static("public"));
app.use('/plogin',ploginRoutes);
app.use('/dlogin',dloginRoutes);  
app.use('/register',registerRoutes);  
app.use('/users',userRoutes);
app.use('/doctors',doctorRoutes);
app.use('/probdesc',probroutes);
app.use('/afterconsult',afterconsultroutes);
const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`App is running in ${process.env.NODE_ENV} mode on port ${PORT}`))
